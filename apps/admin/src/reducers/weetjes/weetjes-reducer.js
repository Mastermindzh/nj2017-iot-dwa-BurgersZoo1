import _ from 'lodash';

import initialState from './initialState';
import { WEETJES_ACTION_TYPES } from './../../constants/actionTypes';


export default function weetjesReducer(state = initialState, action) {
  switch (action.type) {

    case WEETJES_ACTION_TYPES.FETCH_WEETJES:
      return {...state, weetjes: _.mapKeys(action.payload, "id")};

    case WEETJES_ACTION_TYPES.ADD_WEETJE:
      return {...state, weetjes: {...state.weetjes, [action.payload.id]: action.payload}};

    default:
      return state;

  }

}
