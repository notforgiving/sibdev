export enum actionsForSave {
  SAVE_REQ = "SAVE_REQ",
  GET_REQ="GET_REQ",
  SET_REQ="SET_REQ",
  UPS_REQ="UPS_REQ",
}

export const saveReq = (data:any):any => ({
  type: actionsForSave.SAVE_REQ,
  data
});

export const getReqsts = ():any => ({
  type: actionsForSave.GET_REQ
});

export const upsReqsts = (data:any):any => ({
  type: actionsForSave.UPS_REQ,
  data
});

export const setReqsts = (data:any):any => ({
  type: actionsForSave.SET_REQ,
  payload:data
});


