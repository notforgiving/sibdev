import Video from "../Video";
import styles from './style.module.css';

function VideoList() {
  return (
    <div className={styles.videoList}>
      <Video/>
      <Video/>
      <Video/>
    </div>
  );
}

export default VideoList;