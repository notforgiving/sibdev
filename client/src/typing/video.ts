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
  items: IVideo[];
}