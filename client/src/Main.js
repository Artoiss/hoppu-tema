import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Home from "./Home";
import { Button } from "./components/index";
import { HashRouter } from "react-router-dom";





const Main = () => {
  const [navisibility, setNavisibility] = useState(true)


  const handleClick = (visibility)  => {
    setNavisibility(visibility)
  }

  return (
    <div>
      <HashRouter>
        <div>

          <div>
            <Link to="/sell">
              <Button color={"primary"} variant={"contained"} onClick={() => handleClick(false)}>
                Sell
              </Button>
            </Link>
            <Link to="/store">
              <Button color={"primary"} variant={"contained"} onClick={() => handleClick(false)}>
                Store
              </Button>
            </Link>
          </div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/sell" render={() => <App />} />
          <Route exact path="/store" render={() => <Store />} />
        </div>
      </HashRouter>
    </div>
  );
};

export default Main;
