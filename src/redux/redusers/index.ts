import { combineReducers } from "redux";
import videoReduser from './videoReduser'

const rootReducer = combineReducers({
  "video":videoReduser,
});

export default rootReducer;
