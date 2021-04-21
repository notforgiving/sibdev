import { combineReducers } from "redux";

import authorizationReducer from './authorization';
import messageReducer from './message';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  "user" : authorizationReducer,
  "errors": messageReducer,
  "loading" : loadingReducer,
});

export default rootReducer;
