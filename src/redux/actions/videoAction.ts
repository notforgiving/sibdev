export enum actionsForVideo {
  LOAD_VIDEO = "LOAD_VIDEO",
  GET_VIDEO = "GET_VIDEO"
}

export const getVideo = (data:any):any => ({
  type: actionsForVideo.GET_VIDEO,
  payload: data
});

export const loadVideo = (request:string) => {
  return {
    type: actionsForVideo.LOAD_VIDEO,
    request
  };
};
