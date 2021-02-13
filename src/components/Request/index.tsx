import React, { useState } from "react";
import { Button } from "antd";
import Save from "./../Save";

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
          <Button>Выполнить</Button>{" "}
          <Button type="link" danger onClick={handleChangeParam}>
            Изменить
          </Button>
        </div>
      ) : (
        ""
      )}
      {change ? (
        <Save purpuse = "update" visable={change} close={handleChangeParam} data={dataReq} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Request;
