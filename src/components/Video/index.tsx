import React from "react";
import Logo from "./../../assets/img/logo.svg";
import { iVideoItem } from "./../../typing/item";
import style from "./style.module.css";

interface IVideo {
  data: iVideoItem;
  view: string;
}

function Video({ data, view }: IVideo) {
  const viewCount =
    Number(data.viewCount) >= 1000
      ? `${Math.trunc(Number(data.viewCount) / 1000)} тыс`
      : data.viewCount;

  return (
    <div className={view === "wrap" ? style.video : style.videoList}>
      <img
        className={style.videoImg}
        src={data.snippet.thumbnails.high.url}
        alt="Logo"
      />
      <div className={style.videoDescription}>
        <div className={style.videoName}>{data.snippet.title.slice(0, 55)}</div>
        <div>{data.snippet.channelTitle.slice(0, 55)}</div>
        <div>{viewCount} просмотров</div>
      </div>
    </div>
  );
}

export default Video;
