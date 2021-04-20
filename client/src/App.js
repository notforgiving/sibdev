import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {checkAuth} from './redux/actions/authorization';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
