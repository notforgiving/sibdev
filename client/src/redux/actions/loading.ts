import { baseActions } from "./../../typing/actions";

export enum actionsForLoading {
  LOADING = "LOADING",
  LOADED = "LOADED"
}

export const setLoading = (): baseActions => ({
  type: actionsForLoading.LOADING,
});

export const setLoaded = (): baseActions => ({
  type: actionsForLoading.LOADED,
});
