import LoginPage from "./pages/Login/Login";
import style from "./generalStyle.module.css";
import "./theme.css";
import "antd/dist/antd.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { authentification } from "./redux/actions/autorizateAcrion";
import Main from "./pages/Main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(authentification());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <BrowserRouter>
        {!auth.isAuth ? (
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Redirect to='/login'/>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/favorites" component={Favorites} />
            <Redirect to="/"/>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
