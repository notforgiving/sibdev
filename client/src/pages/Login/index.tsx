import { useState } from "react";
import { useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./style.module.css";

function Login() {
  const [login, setLogin] = useState(true);
  const { errors } = useSelector((state: any) => state);

  const handleChangeAction = () => {
    setLogin(!login);
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormBody}>
        <div className={styles.loginHeader}>
          <Typography gutterBottom color="primary" variant="h4" component="h4">
            {login ? "Вход" : "Регистрация"}
          </Typography>
        </div>
        <div>
          <Typography gutterBottom color="primary" variant="subtitle1">
            {errors.message ? `${errors.message}` : ""}
          </Typography>
        </div>
        <div className={styles.loginFields}>
          <div className={styles.loginInput}>
            <TextField
              type="email"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
            />
          </div>
          <div className={styles.loginInput}>
            <TextField
              id="outlined-password-input"
              label="Пароль"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
          </div>
        </div>
        <div className={styles.loginButtons}>
          <Button variant="contained" color="primary">
            {login ? "Войти" : "Зарегистрироваться"}
          </Button>
          <button onClick={handleChangeAction} className={styles.loginLink}>
            {login ? "Создать учетную запись" : "На страницу входа"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
