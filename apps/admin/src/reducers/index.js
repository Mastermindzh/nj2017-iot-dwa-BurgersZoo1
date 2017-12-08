
import { combineReducers } from 'redux';
import sessionReducer from './session/session-reducer';
import speurpuntReducer from './speurpunt/speurpunt-reducer';
import weetjesReducer from './weetjes/weetjes-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  sessionReducer,
  speurpuntReducer,
  weetjesReducer
});

export default rootReducer;
