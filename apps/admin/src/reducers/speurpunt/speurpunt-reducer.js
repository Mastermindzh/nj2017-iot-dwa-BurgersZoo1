import initialState from './initialState';
import _ from 'lodash';
import { SPEURPUNT_ACTION_TYPES } from './../../constants/actionTypes';


export default function speurpuntReducer(state = initialState, action) {
  switch (action.type) {

    case SPEURPUNT_ACTION_TYPES.FETCH_SPEURPUNTEN:
      return {...state, speurpunten: _.mapKeys(action.payload, "id")};

    case SPEURPUNT_ACTION_TYPES.ADD_SPEURPUNT:
      return {...state, speurpunten: {...state.speurpunten, [action.payload.id]: action.payload}};

    case SPEURPUNT_ACTION_TYPES.UPDATE_SPEURPUNT:
      return {...state, speurpunten: {...state.speurpunten, [action.payload.id]: action.payload}};

    default:
      return state;

  }


}
