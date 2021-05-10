import { actionsForVideo } from "./../actions/video";
import { dataActions } from "./../../typing/actions";

const videoReducer = (state = [], action: dataActions) => {
  switch (action.type) {
    case actionsForVideo.PUT_VIDEOS: {
      return action.payload
    }
    case actionsForVideo.CLEAR_VIDEOS: {
      return []
    }
    default:
      return state;
  }
};

export default videoReducer;
