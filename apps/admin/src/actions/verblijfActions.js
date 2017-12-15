import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {VERBLIJVEN_ACTION_TYPES} from './../constants/actionTypes';

export function fetchVerblijven(){
  return (dispatch) => {
    axios.get(ENDPOINTS.VERBLIJVEN.GET).then(result => {
      dispatch({type: VERBLIJVEN_ACTION_TYPES.FETCH_VERBLIJVEN , payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  };
}
