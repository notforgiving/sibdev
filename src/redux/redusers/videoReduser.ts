import {actionsForVideo} from './../actions/videoAction'

const videoReduser = (state = [], action:any) => {
  switch (action.type) {
    case actionsForVideo.GET_VIDEO:
      return [
        ...action.payload
      ]
    default:
      return [...state];
  }
};

export default videoReduser;
