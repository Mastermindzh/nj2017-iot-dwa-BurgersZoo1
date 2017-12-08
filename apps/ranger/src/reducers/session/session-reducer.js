import initialState from './initialState';
import { LOGIN_ACTIONS } from '../../constants/actionTypes';

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.SET_LOGIN_FLAG:
      return {...state, isLoggedIn: action.payload};
    case LOGIN_ACTIONS.SET_LOGGED_IN_USER:
      return {...state, loggedInUser: action.payload};
    case LOGIN_ACTIONS.FETCH_USERS:
      return {...state, availableUsers: action.payload};
    default:
      return state;
  }
}