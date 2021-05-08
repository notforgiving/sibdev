import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { red } from "@material-ui/core/colors";

import { logIn, checkIn } from "./../../redux/actions/authorization";
import { clearMessage } from "./../../redux/actions/message";

import styles from "./style.module.css";

function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const { errors } = useSelector((state: any) => state);
  const [saveUser, setSaveUser] = useState(false);
  const [userData, setUserData] = useState({
    login: localStorage.getItem("user")
      ? `${localStorage.getItem("user")}`
      : "",
    password: "",
  });

  const handleChangeAction = () => {
    setLogin(!login);
    if (errors.message) {
      dispatch(clearMessage());
    }
  };

  const onChangeUserLogin = (event: any) => {
    setUserData({
      ...userData,
      login: event.target.value,
    });
  };

  const onChangeUserPassword = (event: any) => {
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const handleSubmitLogin = () => {
    if (saveUser) {
      localStorage.setItem("user", `${userData.login}`);
    }
    dispatch(logIn(userData));
  };

  const handleSubmitCheckIn = () => {
    if (saveUser) {
      localStorage.setItem("user", `${userData.login}`);
    }
    dispatch(checkIn(userData));
  };

  const handleSaveUser = () => {
    setSaveUser(!saveUser);
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
          <Typography
            gutterBottom
            variant="subtitle1"
            className={styles.loginTextCenter}
            style={{ color: red[500] }}
          >
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
              value={userData.login}
              onChange={onChangeUserLogin}
            />
          </div>
          <div className={styles.loginInput}>
            <TextField
              id="outlined-password-input"
              label="Пароль"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={userData.password}
              onChange={onChangeUserPassword}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={saveUser}
                  onChange={handleSaveUser}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Запомнить меня"
            />
          </div>
        </div>
        <div className={styles.loginButtons}>
          <Button
            variant="contained"
            color="primary"
            onClick={login ? handleSubmitLogin : handleSubmitCheckIn}
          >
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
