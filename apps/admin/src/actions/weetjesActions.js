import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {WEETJES_ACTION_TYPES} from './../constants/actionTypes';

export function fetchWeetjes(){
  return (dispatch) => {
    axios.get(ENDPOINTS.WEETJES.GET).then(result => {
      dispatch({type: WEETJES_ACTION_TYPES.FETCH_WEETJES , payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  }
}
