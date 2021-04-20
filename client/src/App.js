import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
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
