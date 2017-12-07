import axios from 'axios';

import { LOGIN_ACTIONS } from '../constants/actionTypes';
import { PASSEN } from '../constants/endpoint-constants';

export const login = (id) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGIN_FLAG,
      payload: true
    });
    dispatch({
      type: LOGIN_ACTIONS.SET_LOGGED_IN_USER_ID,
      payload: id
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