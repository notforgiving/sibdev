import classNames from "classnames";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeartOutlined } from "@ant-design/icons";
import List from "../../components/List";
import Search from "antd/lib/input/Search";
import Hedaer from "./../../components/Header";
import style from "./main.module.css";

import { loadVideo } from "./../../redux/actions/videoAction";
import Save from "../../components/Save";

function Main() {
  const [request, setRequest] = useState("");
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const { video }: any = useSelector((state) => state);
  const [save, setSave] = useState(false);

  const handlePostRequest = (value: string) => {
    if (value != "") {
      dispatch(loadVideo(value));
    }
  };

  const handleSaveModal = () => {
    setSave(!save);
  };

  const handleChangeSearch = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <Hedaer />
      <section
        className={classNames(`${style.section}`, `${style.sectionSearch}`)}
      >
        <div className={style.container}>
          <span className={style.title}>Поиск видео</span>
          <div className={style.search}>
            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              size="large"
              onSearch={handlePostRequest}
              onChange={handleChangeSearch}
            />
            {selected === "" ? (
              ""
            ) : (
              <button onClick={handleSaveModal} className={style.mark}>
                <HeartOutlined
                  style={{
                    fontSize: 16,
                    color: "#1890ff",
                  }}
                />
              </button>
            )}
          </div>
          {video.length > 0 ? <List video={video} request={request} /> : ""}
        </div>
      </section>
      {save ? (
        <Save purpuse="create" visable={save} close={handleSaveModal} data={selected} />
      ) : (
        ""
      )}
    </>
  );
}

export default Main;
