import {actionsForVideo} from './../actions/videoAction'

const totalReduser = (state = 0, action:any) => {
  switch (action.type) {
    case actionsForVideo.GET_QUANTITY:
      return action.payload
    default:
      return state;
  }
};

export default totalReduser;
