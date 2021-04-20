import { useEffect, useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getViewCount } from "./../../redux/actions/videoAction";

import Video from "../Video";

import style from "./style.module.css";
import Videolist from "../VideoList";

const { Text } = Typography;

function List({ video, request }: any) {
  const [view, setVeiw] = useState("wrap");
  const { total,searchData }: any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const videoId = video.map((item: any, index: number) => {
      return item.id.videoId;
    });
    const videoIDString = videoId.join(",");
    dispatch(getViewCount(videoIDString));
  },[]);

  const handleList = () => {
    setVeiw("list");
  };

  const handleWrap = () => {
    setVeiw("wrap");
  };

  return (
    <div className={style.listWrapper}>
      <div className={style.listHeader}>
        <Text>
          Видео по запросу <strong>"{request}"</strong>{" "}
          {Math.trunc(total / 1000)} тыс.
        </Text>
        <div>
          <button className={style.listViewBtn} onClick={handleList}>
            <BarsOutlined
              style={{
                fontSize: 16,
                color: "#000",
              }}
            />
          </button>
          <button className={style.listViewBtn} onClick={handleWrap}>
            <AppstoreOutlined
              style={{
                fontSize: 16,
                color: "#000",
              }}
            />
          </button>
        </div>
      </div>
      <Videolist view={view} video={video}/>
      {/* <div className={view === "wrap" ? style.listWrap : style.listList}>
        {video.map((item: any, index: number) => {
          return (
            <a href={`https://youtu.be/${item.id.videoId}`}>
              <Video
                key={index}
                data={item}
                view={view === "wrap" ? "wrap" : "list"}
              />
            </a>
          );
        })}
      </div> */}
    </div>
  );
}

export default List;
