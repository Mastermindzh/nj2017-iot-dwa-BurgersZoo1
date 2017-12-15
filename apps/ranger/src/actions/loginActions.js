import axios from 'axios';

import { LOGIN_ACTIONS } from '../constants/actionTypes';
import { PASSEN } from '../constants/endpoint-constants';

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGIN_FLAG,
      payload: true
    });
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGGED_IN_USER,
      payload: user
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGIN_FLAG,
      payload: false
    });
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGGED_IN_USER,
      payload: {}
    });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get(PASSEN.GET_MULTIPLE).then(result => {
      dispatch({
        type: LOGIN_ACTIONS.FETCH_USERS,
        payload: result.data
      });
    });
  };
};