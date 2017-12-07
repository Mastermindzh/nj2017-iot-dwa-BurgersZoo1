import initialState from './initialState';
import { LOGIN_ACTIONS } from '../../constants/actionTypes';

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.SET_LOGIN_FLAG:
      return {...state, isLoggedIn: action.payload};
    case LOGIN_ACTIONS.SET_LOGGED_IN_USER_ID:
      return {...state, loggedInUserId: action.payload};
    case LOGIN_ACTIONS.FETCH_USERS:
      return {...state, availableUsers: action.payload.map(user => {return `${user.pasid} (${user.id})`;})};
    default:
      return state;
  }
}