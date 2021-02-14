import {actionsForVideo} from './../actions/videoAction'

const videoReduser = (state = [], action:any) => {
  switch (action.type) {
    case actionsForVideo.SET_VIEWCOUNT:
      const newState = state.map((item:any,index)=>{
        
        item.viewCount = action.payload.items[index].statistics.viewCount
        return item
      })
      return newState
    case actionsForVideo.GET_VIDEO:
      return [
        ...action.payload
      ]
    default:
      return [...state];
  }
};

export default videoReduser;
