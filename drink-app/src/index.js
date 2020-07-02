import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import home from "./Pages/Home";
import explore from "./Pages/Explore";
import NoPageFound from "./Pages/DefaultPage";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={home} exact={true} />
        <Route path="/home" component={home} />
        <Route path="/explore" component={explore} />

        <Route component={NoPageFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
