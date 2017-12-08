import initialState from './initialState';
import _ from 'lodash';
import { DIERENGELUIDEN_ACTION_TYPES } from './../../constants/actionTypes';


export default function dierengeluidenReducer(state = initialState, action) {
  switch (action.type) {

    case DIERENGELUIDEN_ACTION_TYPES.FETCH_DIERENGELUIDEN:
      return {...state, dierengeluiden: _.mapKeys(action.payload, "id")};

    default:
      return state;

  }


}
