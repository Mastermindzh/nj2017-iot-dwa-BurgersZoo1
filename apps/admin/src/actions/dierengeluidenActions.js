import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {DIERENGELUIDEN_ACTION_TYPES} from './../constants/actionTypes';

export function fetchDierengeluiden() {
  return (dispatch) => {
    axios.get(ENDPOINTS.DIERENGELUIDEN.GET).then(result => {
      dispatch({type: DIERENGELUIDEN_ACTION_TYPES.FETCH_DIERENGELUIDEN, payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  };
}

export function addDierengeluid(beschrijving, bestandspad) {
  return (dispatch) => {
    axios.post(ENDPOINTS.DIERENGELUIDEN.POST, {
      bestandspad: bestandspad,
      beschrijving: beschrijving
    }).then(result => {
      dispatch({type: DIERENGELUIDEN_ACTION_TYPES.ADD_DIERENGELUID, payload: result.data});
    });
  };
}
