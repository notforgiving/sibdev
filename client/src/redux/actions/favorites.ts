import { baseActions, dataActions } from "./../../typing/actions";
import { Favorite, favoriteDB } from "../../typing/favorite";

export enum actionsForFavorites {
  SET_FAVORITE = "SET_FAVORITE",
  GET_FAVORITES = "GET_FAVORITES",
  PUT_FAVORITES = "PUT_FAVORITES",
  DELETE_FAVORITES = "DELETE_FAVORITES",
  CLEAR_FAVORITES = "CLEAR_FAVORITES"
}

export const setFavorite = (favorite: Favorite): dataActions => ({
  type: actionsForFavorites.SET_FAVORITE,
  payload: favorite,
});

export const getFavorites = (): baseActions => ({
  type: actionsForFavorites.GET_FAVORITES,
});

export const putFavorite = (favorite: favoriteDB[]): dataActions => ({
  type: actionsForFavorites.PUT_FAVORITES,
  payload: favorite,
});

export const deleteFavorite = (id: string): dataActions => ({
  type: actionsForFavorites.DELETE_FAVORITES,
  payload: id,
});

export const clearFavorites = (): baseActions => ({
  type: actionsForFavorites.CLEAR_FAVORITES,
});

