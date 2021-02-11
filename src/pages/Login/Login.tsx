import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import styles from "./login.module.css";
import Logo from "./../../assets/img/logo.svg";

function LoginPage() {
  const [form] = Form.useForm();

  return (
    <div className={styles.container}>

    
    <div className={styles.login}>
      <div className={styles.loginFormWrapper}>
        <img className={styles.loginLogo} src={Logo} alt="Логотип" />
        <h1 className={styles.loginTitle}>Вход</h1>
        <Form className={styles.loginForm} layout="vertical" form={form}>
          <Form.Item label="Логин">
            <Input />
          </Form.Item>
          <Form.Item label="Пароль">
            <Input.Password />
          </Form.Item>
          <div className={styles.loginSubmit}>
          <Form.Item>
            <Button type="primary">Войти</Button>
          </Form.Item>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
