import _ from 'lodash';

import initialState from './initialState';
import { DIERENGELUIDEN_ACTION_TYPES } from './../../constants/actionTypes';


export default function dierengeluidenReducer(state = initialState, action) {
  switch (action.type) {

    case DIERENGELUIDEN_ACTION_TYPES.FETCH_DIERENGELUIDEN:
      return {...state, dierengeluiden: _.mapKeys(action.payload, "id")};

    case DIERENGELUIDEN_ACTION_TYPES.ADD_DIERENGELUID:
      return {...state, dierengeluiden: {...state.dierengeluiden, [action.payload.id]: action.payload}};

    default:
      return state;

  }


}
