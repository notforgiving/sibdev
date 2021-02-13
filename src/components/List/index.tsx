import { useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import {useSelector} from 'react-redux'

import Video from "../Video";

import style from "./style.module.css";

const { Text } = Typography;

function List({ video, request }: any) {
  const [view, setVeiw] = useState("wrap");
  const {total}: any  = useSelector(state=>state)

  const handleList = () => {
    setVeiw("list");
  };

  const handleWrap = () => {
    setVeiw("wrap");
  };

  return (
    <div className={style.listWrapper}>
      <div className={style.listHeader}>
        <Text>Видео по запросу "{request}" {total}</Text>
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
      <div className={view === "wrap" ? style.listWrap : style.listList}>
        {video.map((item: any) => {
          return (
            <Video
              key={item.id.videoId}
              data={item}
              view={view === "wrap" ? "wrap" : "list"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
