import React from "react";
import { Menu } from "antd";
import style from "./style.module.css";
import Logo from "./../../assets/img/logo.svg";
import { logOut } from "./../../redux/actions/autorizateAcrion";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Hedaer() {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logOut());
  };
  return (
    <header className={style.header}>
      <Menu className={style.container} mode="horizontal">
          <img key="logo" className={style.headerImg} src={Logo} alt="Logo" />
        <Menu.Item key="search">
          <NavLink to="/">Поиск</NavLink>
        </Menu.Item>
        <Menu.Item key="marks">
          <NavLink to="/favorites">Избранное</NavLink>
        </Menu.Item>
        <Menu.Item key="exit">
          <button className={style.exitBtn} onClick={handleExit}>
            Выйти
          </button>
        </Menu.Item>
      </Menu>
    </header>
  );
}

export default Hedaer;
