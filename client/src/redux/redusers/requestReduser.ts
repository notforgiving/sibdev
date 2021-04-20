import { actionsForSave } from "./../actions/reqActions";

const autorizateReduser = (state = [], action: any) => {
  switch (action.type) {
    case actionsForSave.SET_REQ:
      const newState = [
        ...action.payload
      ]
      return newState;
    default:
      return state;
  }
};

export default autorizateReduser;
