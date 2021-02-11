export interface iVideoId{
  kind: string,
  videoId: string
}

export interface iVideoItem{
  kind: string,
  etag: string,
  id: iVideoId,
  snippet: any
}