import { combineReducers } from "redux";
import videoReduser from './videoReduser'
import totalReduser from './totalVideo'
import autorizateReduser from './autorizateReduser'
import requestReduser from './requestReduser'
import runRequestReduser from './runRequestReduser'

const rootReducer = combineReducers({
  "video":videoReduser,
  "total":totalReduser,
  "auth":autorizateReduser,
  "favorites":requestReduser,
  "searchData":runRequestReduser
});

export default rootReducer;
