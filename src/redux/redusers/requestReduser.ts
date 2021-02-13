import { actionsForSave } from "./../actions/reqActions";

const autorizateReduser = (state = [], action: any) => {
  switch (action.type) {
    case actionsForSave.SET_REQ:
      return [
        ...action.payload
      ];
    default:
      return state;
  }
};

export default autorizateReduser;
