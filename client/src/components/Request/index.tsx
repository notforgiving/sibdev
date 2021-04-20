import React, { useState } from "react";
import { Button } from "antd";
import Save from "./../Save";
import { NavLink, Link } from "react-router-dom";
import {saveRequest} from './../../redux/actions/runRequest'
import { useDispatch } from "react-redux";

interface IrequestProp {
  name: string;
  sort: string;
  text: string;
  user: string;
  value: number;
  __v: number;
  _id: string;
}

function Request({ className, dataReq }: any) {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch()
  
  const handleClick = () => {
    setClick(!click);
  };

 const handleChangeParam = () => {
    setChange(!change);
  };

  return (
    <div onClick={change ? () => {} : handleClick} className={className}>
      {dataReq.text}
      {click ? (
        <div>
          <Link to="/">
            <Button onClick={()=>{dispatch(saveRequest(dataReq))}}>Выполнить</Button>
          </Link>
          <Button type="link" danger onClick={handleChangeParam}>
            Изменить
          </Button>
        </div>
      ) : (
        ""
      )}
      {change ? (
        <Save
          purpuse="update"
          visable={change}
          close={handleChangeParam}
          data={dataReq}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Request;
