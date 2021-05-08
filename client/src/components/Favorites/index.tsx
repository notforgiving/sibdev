import {  useSelector } from "react-redux";

import Request from "./../Request";

import { favoriteDB } from "../../typing/favorite";

import styles from "./style.module.css";

function Favorites() {
  const { favorites } = useSelector((state: any) => state);

  return (
    <div className={styles.body}>
      {favorites.map((markReq: favoriteDB) => {
        console.log(markReq, "markReq");
        return (
          <Request
            key={markReq._id}
            name={markReq.name}
            text={markReq.text}
            value={markReq.value}
            sort={markReq.sort}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
