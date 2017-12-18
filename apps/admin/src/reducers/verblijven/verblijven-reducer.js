import initialState from './initialState';
import _ from 'lodash';
import { VERBLIJVEN_ACTION_TYPES } from './../../constants/actionTypes';


export default function verblijvenReducer(state = initialState, action) {
  switch (action.type) {

    case VERBLIJVEN_ACTION_TYPES.FETCH_VERBLIJVEN:
      return {...state, verblijven: _.mapKeys(action.payload, "id")};

    default:
      return state;

  }

}
