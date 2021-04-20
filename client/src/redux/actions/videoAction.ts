export enum actionsForVideo {
  LOAD_VIDEO = "LOAD_VIDEO",
  GET_VIDEO = "GET_VIDEO",
  GET_QUANTITY = "GET_QUANTITY",
  GET_VIEWCOUNT = "GET_VIEWCOUNT",
  SET_VIEWCOUNT = "SET_VIEWCOUNT",
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

export const setViewCount = (values:any):any => ({
  type: actionsForVideo.SET_VIEWCOUNT,
  payload: values
});

export const getViewCount = (values:any):any => ({
  type: actionsForVideo.GET_VIEWCOUNT,
  payload: values
});
