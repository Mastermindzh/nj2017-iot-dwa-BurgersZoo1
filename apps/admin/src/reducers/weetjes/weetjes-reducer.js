import initialState from './initialState';
import _ from 'lodash';
import { WEETJES_ACTION_TYPES } from './../../constants/actionTypes';


export default function weetjesReducer(state = initialState, action) {
  switch (action.type) {

    case WEETJES_ACTION_TYPES.FETCH_WEETJES:
      return {...state, weetjes: _.mapKeys(action.payload, "id")};

    default:
      return state;

  }

}
