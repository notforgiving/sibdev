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
            console.log(video.snippet,'video.id')
            return <Video key={video.id} pic={video.snippet.thumbnails.medium.url} title={video.snippet.title} description={video.snippet.description}/>;
          })
        : ""}
    </div>
  );
}

export default VideoList;
