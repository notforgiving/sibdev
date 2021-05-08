import { actionsForSearch } from "./../actions/search";
import { dataActions } from "./../../typing/actions";

const searchReducer = (state = '', action: dataActions) => {
  switch (action.type) {
    case actionsForSearch.SET_SEARCH_STRING: {
      return action.payload
    }
    case actionsForSearch.CLEAR_SEARCH_STRING: {
      return ''
    }
    default:
      return state;
  }
};

export default searchReducer;
