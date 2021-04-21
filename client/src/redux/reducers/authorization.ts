import { actionsForAuthorization } from "./../actions/authorization";

import { dataActions } from "./../../typing/actions";

const initialState = {};

const authorizationReducer = (state = initialState, action: dataActions) => {
  switch (action.type) {
    case actionsForAuthorization.SET_USER: {
      localStorage.setItem("token", `${action.payload.token}`);
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default authorizationReducer;
