import { combineReducers } from "redux";

import authorizationReducer from "./authorization";
import messageReducer from "./message";
import loadingReducer from "./loading";
import searchReducer from "./search";
import favoritesReducer from "./favorites";
import videoReducer from './video';

const rootReducer = combineReducers({
  user: authorizationReducer,
  errors: messageReducer,
  loading: loadingReducer,
  search: searchReducer,
  favorites: favoritesReducer,
  videos: videoReducer,
});

export default rootReducer;
