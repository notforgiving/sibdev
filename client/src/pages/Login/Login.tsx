import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { useDispatch } from "react-redux";
import styles from "./login.module.css";
import Logo from "./../../assets/img/logo.svg";
import { logIn, registr } from "./../../redux/actions/autorizateAcrion";

function LoginPage() {
  const [form] = Form.useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeLogin = (e: any) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (login != "" && password != "") {
      dispatch(logIn({ login, password }));
    }
  };

  const handleRegistr = () => {
    if (login != "" && password != "") {
      dispatch(registr({ login, password }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.loginFormWrapper}>
          <img className={styles.loginLogo} src={Logo} alt="Логотип" />
          <h1 className={styles.loginTitle}>Вход</h1>
          <Form className={styles.loginForm} layout="vertical" form={form}>
            <Form.Item label="Логин/E-mail">
              <Input onChange={handleChangeLogin} required />
            </Form.Item>
            <Form.Item label="Пароль">
              <Input.Password onChange={handleChangePassword} required />
            </Form.Item>
            <div className={styles.loginSubmit}>
              <Form.Item>
                <Button onClick={handleSubmit} type="primary">
                  Войти
                </Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={handleRegistr} type="primary">
                  Регистрация
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
