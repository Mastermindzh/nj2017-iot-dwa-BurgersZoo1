
import { combineReducers } from 'redux';
import sessionReducer from './session/session-reducer';
import parkHistoryReducer from './parkhistory/park-history-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  sessionReducer,
  parkHistoryReducer,
  routing: routerReducer
});

export default rootReducer;