export interface iVideoId{
  kind: string,
  videoId: string
}

export interface iVideoItem{
  kind: string,
  etag: string,
  id: iVideoId,
  snippet: any,
  viewCount:string
}

export interface iVideoTotal{
  etag: string,
  items:iVideoItem[],
  kind:string,
  nextPageToken:string,
  pageInfo:any,
  regionCode:string
}