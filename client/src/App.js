import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Preloader from "./components/Preloader";

import { checkAuth } from "./redux/actions/authorization";

function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <>
      <BrowserRouter>
        {!loading ? (
          !user.token ? (
            <Switch>
              <Route exact path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Profile} />
              <Redirect to="/" />
            </Switch>
          )
        ) : (
          <Preloader/>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
