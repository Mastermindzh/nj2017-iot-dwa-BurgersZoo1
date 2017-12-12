import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {POTEN_ACTION_TYPES} from './../constants/actionTypes';

export function fetchPoten(){
  return (dispatch) => {
    axios.get(ENDPOINTS.POTEN.GET).then(result => {
      dispatch({type: POTEN_ACTION_TYPES.FETCH_POTEN , payload: result.data});

    }).catch(err => {
      console.log(err);
    });
  };
}
