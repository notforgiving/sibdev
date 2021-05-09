import { actionsForFavorites } from "./../actions/favorites";
import { dataActions } from "./../../typing/actions";

const initialState: any[] = [];

const favoritesReducer = (state = initialState, action: dataActions) => {
  switch (action.type) {
    case actionsForFavorites.PUT_FAVORITES:
      return [...action.payload];
      case actionsForFavorites.CLEAR_FAVORITES:
        return [];
    default:
      return state;
  }
};

export default favoritesReducer;
