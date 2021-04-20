import {actionsForMessage} from './../actions/message';
import {dataActions} from './../../typing/actions';

const initialState = {};

const messageReducer = (state = initialState, action: dataActions) => {
  switch (action.type) {
    case actionsForMessage.SET_MESSAGE:
      return {
        ...action.payload
      }
    default:
      return state;
  }
};

export default messageReducer;