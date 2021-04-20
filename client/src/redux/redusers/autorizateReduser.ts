import { actionsForAutorizate } from "../actions/autorizateAcrion";

const initialState = {
  currentUser: {},
  isAuth: false,
};

const autorizateReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsForAutorizate.LOG_OUT:
      localStorage.setItem("token", "undefined");
      return {
        ...state,
        currentUser: "null",
        isAuth: false,
      };
    case actionsForAutorizate.LOG_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        currentUser: action.payload.user.id,
        isAuth: true,
      };
    case actionsForAutorizate.SET_USER:
      if (action.payload === false) {
        return {
          ...state,
          currentUser: "null",
          isAuth: false,
        };
      } else {
        return {
          ...state,
          currentUser: action.payload.data,
          isAuth: true,
        };
      }
    default:
      return state;
  }
};

export default autorizateReduser;
