import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import style from "./style.module.css";

const Mark = (
  <button className={style.mark}>
    <HeartOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  </button>
);

export default Mark;
