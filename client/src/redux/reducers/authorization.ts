import {actionsForAuthorization} from './../actions/authorization';
import {dataActions} from './../../typing/actions';

const initialState = {};

const authorizationReducer = (state = initialState, action: dataActions) => {
  switch (action.type) {
    case actionsForAuthorization.SET_USER:
      return {
        ...action.payload
      }
    default:
      return state;
  }
};

export default authorizationReducer;