import axios from 'axios';

import { PASSEN, RANGER_VISITED } from '../constants/endpoint-constants';
import { VISIT_HISTORY_ACTIONS } from '../constants/actionTypes';

export const fetchParkHistory = () => {
  return (dispatch, getState) => {
    const id = getState().sessionReducer.loggedInUser.id;
    axios.get(`${PASSEN.GET_MULTIPLE}/${id}/ranger`).then(passenResult => {
      axios.get(`${RANGER_VISITED.GET_MULTIPLE_VISITS}&rangerid=${passenResult.data.id}`).then(result => {
        const filterResultOnRangerId = result.data.filter(result => result.rangerid === passenResult.data.id);
        dispatch({
          type: VISIT_HISTORY_ACTIONS.FETCH_VISIT_HISTORY,
          payload: filterResultOnRangerId.reverse()
        });
      });
    });
  };
};