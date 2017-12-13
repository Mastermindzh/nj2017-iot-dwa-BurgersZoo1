import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {SPEURPUNT_ACTION_TYPES} from './../constants/actionTypes';

export function fetchSpeurpunten(){
  return (dispatch) => {
    axios.get(ENDPOINTS.SPEURPUNT.GET).then(result => {
      dispatch({type: SPEURPUNT_ACTION_TYPES.FETCH_SPEURPUNTEN , payload: result.data});

    }).catch(err => {
      console.log(err);
    });
  };
}

export function addSpeurpunt(speurpunt){
  return (dispatch) => {
    axios.post(ENDPOINTS.SPEURPUNT.POST, speurpunt).then(result => {
      dispatch({type: SPEURPUNT_ACTION_TYPES.ADD_SPEURPUNT , payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  };
}

export function updateSpeurpunt(speurpunt){
  return (dispatch) => {
    axios.patch(ENDPOINTS.SPEURPUNT.PATCH, speurpunt.getPatchObject()).then(result => {
      dispatch({type: SPEURPUNT_ACTION_TYPES.UPDATE_SPEURPUNT , payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  };
}
