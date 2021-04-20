export enum actionsForRunRequest {
  SAVE_REQUEST = "SAVE_REQUEST",
}

export const saveRequest = (data:any):any => ({
  type: actionsForRunRequest.SAVE_REQUEST,
  payload: data
});

