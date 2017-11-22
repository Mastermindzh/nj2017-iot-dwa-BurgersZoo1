
import { combineReducers } from 'redux';
import session from './session-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  session,
  routing: routerReducer
});

export default rootReducer;