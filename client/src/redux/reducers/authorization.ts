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
    case actionsForAuthorization.LOG_OUT: {
      localStorage.setItem("token", `undefined`);
      return {};
    }
    default:
      return state;
  }
};

export default authorizationReducer;
