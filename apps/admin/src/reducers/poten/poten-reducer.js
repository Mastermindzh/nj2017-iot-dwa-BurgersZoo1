import initialState from './initialState';
import _ from 'lodash';
import { POTEN_ACTION_TYPES } from './../../constants/actionTypes';


export default function potenReducer(state = initialState, action) {
  switch (action.type) {

    case POTEN_ACTION_TYPES.FETCH_POTEN:
      return {...state, poten: _.mapKeys(action.payload, "id")};

    default:
      return state;

  }

}
