import { combineReducers } from "redux";

import authorizationReducer from "./authorization";
import messageReducer from "./message";
import loadingReducer from "./loading";
import searchReducer from "./search";
import favoritesReducer from "./favorites";

const rootReducer = combineReducers({
  user: authorizationReducer,
  errors: messageReducer,
  loading: loadingReducer,
  search: searchReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
