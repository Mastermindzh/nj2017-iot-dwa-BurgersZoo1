import initialState from './initialState';
import { VISIT_HISTORY_ACTIONS } from '../../constants/actionTypes';

export default function parkHistoryReducer(state = initialState.parkHistory, action) {
  switch (action.type) {
    case VISIT_HISTORY_ACTIONS.FETCH_VISIT_HISTORY:
      return {...state, parkHistory: action.payload};
    default:
      return state;
  }
}