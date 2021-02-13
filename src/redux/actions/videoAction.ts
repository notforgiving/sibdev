export enum actionsForVideo {
  LOAD_VIDEO = "LOAD_VIDEO",
  GET_VIDEO = "GET_VIDEO",
  GET_QUANTITY = "GET_QUANTITY",
}

export const getVideo = (data:any):any => ({
  type: actionsForVideo.GET_VIDEO,
  payload: data
});

export const getTotalQuantity = (value:number):any => ({
  type: actionsForVideo.GET_QUANTITY,
  payload: value
});

export const loadVideo = (request:string) => {
  return {
    type: actionsForVideo.LOAD_VIDEO,
    request
  };
};
