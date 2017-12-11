
import { combineReducers } from 'redux';
import sessionReducer from './session/session-reducer';
import speurpuntReducer from './speurpunt/speurpunt-reducer';
import dierengeluidenReducer from './dierengeluiden/dierengeluiden-reducer';
import weetjesReducer from './weetjes/weetjes-reducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  routing: routerReducer,
  sessionReducer,
  speurpuntReducer,
  dierengeluidenReducer,
  weetjesReducer
});

export default rootReducer;
