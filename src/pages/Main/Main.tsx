import classNames from "classnames";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Menu } from "antd";
import Mark from "./../../components/Mark";
import List from "../../components/List";
import Search from "antd/lib/input/Search";
import Logo from "./../../assets/img/logo.svg";

import style from "./main.module.css";

import { loadVideo } from "./../../redux/actions/videoAction";
import { iVideoItem, iVideoId } from "./../../typing/item";

function Main() {
  const [request, setRequest] = useState("");
  const [selected, setSelected] = useState("search");
  const dispatch = useDispatch();
  const { video }: any = useSelector((state) => state);

  const handleChangeRequest = (e: any) => {
    setRequest(e.target.value);
  };

  const handlePostRequest = () => {
    if (request != "") {
      dispatch(loadVideo(request));
    }
  };

  return (
    <>
      <header className={style.header}>
        <Menu
          className={style.container}
          selectedKeys={[selected]}
          mode="horizontal"
        >
          <img key="logo" className={style.headerImg} src={Logo} alt="Logo" />
          <Menu.Item key="search">Поиск</Menu.Item>
          <Menu.Item key="marks">Избранное</Menu.Item>
          <Menu.Item key="exit">
            <a>Выйти</a>
          </Menu.Item>
        </Menu>
      </header>
      <section
        className={classNames(`${style.section}`, `${style.sectionSearch}`)}
      >
        <div className={style.container}>
          <span className={style.title}>Поиск видео</span>
          <Search
            placeholder="Что хотите посмотреть?"
            enterButton="Найти"
            onChange={handleChangeRequest}
            size="large"
            suffix={Mark}
            onSearch={handlePostRequest}
          />
          {video.length>0 ? <List video={video} request={request}/> : ""}
        </div>
      </section>
    </>
  );
}

export default Main;
