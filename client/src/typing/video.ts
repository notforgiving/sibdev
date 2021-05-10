export interface IVideo {
  contentDetails: any;
  etag: string;
  id: string;
  kind: string;
  snippet: any;
  statistics: {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

export interface IVideosResult {
  config: any;
  data: {
    etag: string;
    items: IVideo[];
    kind: string;
    pageInfo: any;
  };
  headers: any;
  request: any;
  status: number;
  statusText: string;
}