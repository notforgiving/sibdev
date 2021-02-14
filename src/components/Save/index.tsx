import { Modal, Button, Form, Input, Select } from "antd";
import style from "./style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveReq, upsReqsts,getReqsts } from "../../redux/actions/reqActions";

const { Option } = Select;

interface ISaveProp {
  purpuse: string;
  visable: boolean;
  close: Function;
  data: any;
}

function Save({ visable, close, data, purpuse }: ISaveProp) {
  const [form] = Form.useForm();
  const [display, setDisplay] = useState(visable);
  const [quantity, setQuantity] = useState(
    purpuse == "create" ? 0 : data.value
  );
  const dispatch = useDispatch();
  const [name, setName] = useState(purpuse === "create" ? "" : data.name);
  const [sort, setSort] = useState(
    purpuse == "create" ? "Без сортировки" : `${data.sort}`
  );
  const handleChangeVisable = () => {
    setDisplay(!visable);
    close();
  };

  const handeChangeRange = (e: any) => {
    if (e.target.value > 50) {
      setQuantity(50);
    } else {
      setQuantity(e.target.value);
    }
  };

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleSaveRequest = () => {
    dispatch(saveReq({ data, name, sort, quantity }));
    close();
  };

  const handleChangeRequest = () => {
    const objectid = data._id;
    const text = data.text;
    dispatch(upsReqsts({ text, name, sort, quantity, objectid }));
    close();
  };

  const handleChangeSort = (e: any) => {
    setSort(e);
  };

  return (
    <Modal
      visible={display}
      title="Сохранить запрос"
      onCancel={handleChangeVisable}
      footer={[
        <Button onClick={handleChangeVisable} key="Назад">
          Не сохранять
        </Button>,
        <Button
          onClick={
            purpuse == "create" ? handleSaveRequest : handleChangeRequest
          }
          key="Сохранить"
          type="primary"
        >
          Сохранить
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Запрос">
          <Input
            defaultValue={purpuse == "create" ? data : data.text}
            disabled={purpuse == "create" ? true : false}
          />
        </Form.Item>
        <Form.Item label="Название">
          <Input value={name} onChange={handleChangeName} />
        </Form.Item>
        <Form.Item label="Сортировать по">
          <Select
            defaultValue="Без сортировки"
            value={sort}
            onChange={handleChangeSort}
          >
            <Option value="date">По дате</Option>
            <Option value="rating">По рейтингу</Option>
            <Option value="relevance">По релевантности</Option>
            <Option value="title">В алфавитном порядке</Option>
            <Option value="videoCount">По количеству загруженных видео</Option>
            <Option value="viewCount">По количеству просмотров</Option>
          </Select>
        </Form.Item>
        <div className={style.saveQuantity}>
          <input
            className={style.saveRange}
            type="range"
            min="0"
            max="50"
            value={quantity}
            onChange={handeChangeRange}
          />
          <Input
            onChange={handeChangeRange}
            className={style.saveQuantityValue}
            value={quantity}
          />
        </div>
      </Form>
    </Modal>
  );
}

export default Save;
