import { combineReducers } from 'redux';

import routesReducer from '../reducers/routes/routesReducer';
import counterReducer from '../reducers/counter/counterReducer';

export default combineReducers({
  routesReducer,
  counterReducer,
});
