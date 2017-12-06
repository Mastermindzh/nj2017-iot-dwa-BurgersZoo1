import initialState from './initialState';
import { SPEURPUNT_ACTION_TYPES } from './../../constants/actionTypes';


export default function speurpuntReducer(state = initialState, action) {
  switch (action.type) {

    case SPEURPUNT_ACTION_TYPES.FETCH_SPEURPUNTEN:
      return {...state, speurpunten: action.payload};

    default:
      return state;

  }


}
