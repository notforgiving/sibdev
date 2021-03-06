import { searchOptions } from "../../typing/search";
import { IVideosResult } from "../../typing/video";
import { baseActions, dataActions } from "./../../typing/actions";

export enum actionsForVideo {
  GET_VIDEOS = "GET_VIDEOS",
  PUT_VIDEOS = "PUT_VIDEOS",
  CLEAR_VIDEOS = "CLEAR_VIDEOS"
}

export const getVideos = (options: searchOptions): dataActions => ({
  type: actionsForVideo.GET_VIDEOS,
  payload: options
});

export const putVideos = (videos: IVideosResult[]): dataActions => ({
  type: actionsForVideo.PUT_VIDEOS,
  payload: videos
});

export const clearVideos = (): baseActions => ({
  type: actionsForVideo.CLEAR_VIDEOS,
});