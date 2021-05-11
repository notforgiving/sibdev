import { useSelector } from "react-redux";
import { IVideo } from "../../typing/video";
import Video from "../Video";
import styles from "./style.module.css";

function VideoList() {
  const { videos } = useSelector((state: any) => state);
  console.log(videos, "videos");
  return (
    <div className={styles.videoList}>
      {videos
        ? videos.map((video: IVideo) => {
            console.log(video, "video.id");
            return (
              <Video
                key={video.id}
                pic={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                description={video.snippet.description}
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
