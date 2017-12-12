import axios from 'axios';

import { PASSEN, RANGER_VISITED } from '../constants/endpoint-constants';
import { VISIT_HISTORY_ACTIONS } from '../constants/actionTypes';

export const fetchParkHistory = () => {
  return (dispatch, getState) => {
    const id = getState().sessionReducer.loggedInUser.id;
    axios.get(`${PASSEN.GET_MULTIPLE}/${id}/ranger`).then(result => {
      axios.get(`${RANGER_VISITED.GET_MULTIPLE_VISITS}/?rangerid=${result.data.id}`).then(result => {
        dispatch({
          type: VISIT_HISTORY_ACTIONS.SET_VISIT_HISTORY,
          payload: result.data
        });
      });
    });
  };
};