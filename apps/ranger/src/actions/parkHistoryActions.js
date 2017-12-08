import axios from 'axios';

import { PASSEN, RANGER_VISITED } from '../constants/endpoint-constants';

export const fetchParkHistory = () => {
  return (dispatch, getState) => {
    const id = getState().sessionReducer.loggedInUser.id;
    axios.get(`${PASSEN.GET_MULTIPLE}/${id}/ranger`).then(result => {
      axios.get(`${RANGER_VISITED.GET_MULTIPLE_VISIT_DATES}/?rangerid=${result.data.id}`).then(result => {
        console.log(result.data)
      })
    })
  }
}