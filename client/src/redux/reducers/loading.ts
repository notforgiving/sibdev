import { actionsForLoading } from "./../actions/loading";
import { baseActions } from "./../../typing/actions";

const loadingReducer = (state = false, action: baseActions) => {
  switch (action.type) {
    case actionsForLoading.LOADING: {
      return true;
    }
    case actionsForLoading.LOADED: {
      return false;
    }
    default:
      return state;
  }
};

export default loadingReducer;
