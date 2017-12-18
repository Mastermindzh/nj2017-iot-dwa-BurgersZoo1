import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {WEETJES_ACTION_TYPES} from './../constants/actionTypes';

export function fetchWeetjes() {
  return (dispatch) => {
    axios.get(ENDPOINTS.WEETJES.GET).then(result => {
      dispatch({type: WEETJES_ACTION_TYPES.FETCH_WEETJES, payload: result.data});
    }).catch(err => {
      console.log(err);
    });
  };
}

export function uploadWeetje(beschrijving, bestandspad) {
  console.log("uploadWeetje: "+beschrijving+' bestandspad: '+bestandspad);
  //todo dit upload endpoint geeft error, wss een object te weinig mee gegeven.
  return axios.post(ENDPOINTS.WEETJES.POST, {
    bestandspad: bestandspad,
    beschrijving: beschrijving
  });
}
