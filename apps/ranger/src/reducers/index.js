
import { combineReducers } from 'redux';
import sessionReducer from './session/session-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  sessionReducer,
  routing: routerReducer
});

export default rootReducer;