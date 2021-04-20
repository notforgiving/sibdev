import { combineReducers } from "redux";
import authorizationReducer from './authorization';
import messageReducer from './message';

const rootReducer = combineReducers({
  "user" : authorizationReducer,
  "message": messageReducer,
});

export default rootReducer;
