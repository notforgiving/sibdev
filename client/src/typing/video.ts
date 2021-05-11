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

export interface VideoProp {
  pic: string;
  title: string;
  date: string;
  url: string;
  viewCount: string;
  channelTitle: string;
}