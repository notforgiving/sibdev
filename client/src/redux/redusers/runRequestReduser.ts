import { actionsForRunRequest} from './../actions/runRequest'

const initialState = {
  text:"",
  sort:"",
  value:""
}

const runRequestReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsForRunRequest.SAVE_REQUEST:
      return {
        ...state,
        text:action.payload.text,
        sort:action.payload.sort,
        value:action.payload.value,
        name:action.payload.name
      };
    default:
      return state;
  }
};

export default runRequestReduser;
