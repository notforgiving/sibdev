import { useSelector } from "react-redux";

import Video from "../Video";

import { IVideo } from "../../typing/video";

import styles from "./style.module.css";

function VideoList() {
  const { videos } = useSelector((state: any) => state);

  return (
    <div className={styles.videoList}>
      {videos
        ? videos.map((video: IVideo) => {

            return (
              <Video
                key={video.id}
                pic={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                date = {video.snippet.publishedAt}
                url={video.id}
                viewCount = {video.statistics.viewCount}
                channelTitle = {video.snippet.channelTitle}
              />
            );
          })
        : ""}
    </div>
  );
}

export default VideoList;
