import { Default } from "react-spinners-css";

import styles from "./preloader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <Default color="#3f51b5" size={100} />
    </div>
  );
}

export default Preloader;
