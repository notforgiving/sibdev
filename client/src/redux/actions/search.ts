import { baseActions,dataActions } from "./../../typing/actions";

export enum actionsForSearch {
  SET_SEARCH_STRING = "SET_SEARCH_STRING",
  CLEAR_SEARCH_STRING = "CLEAR_SEARCH_STRING"
}

export const setSearchString = (searchString: string): dataActions => ({
  type: actionsForSearch.SET_SEARCH_STRING,
  payload: searchString
});

export const clearSearchString = (): baseActions => ({
  type: actionsForSearch.CLEAR_SEARCH_STRING,
});
