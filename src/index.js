import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import PageLogIn from "./components/PageLogIn_SignIn_ForgotPassword/Page_LogIn";
import PageSignIn from "./components/PageLogIn_SignIn_ForgotPassword/Page_SignIn";
import PageForgotPassword from "./components/PageLogIn_SignIn_ForgotPassword/Page_ForgotPassword";
import PageRePassword from "./components/PageLogIn_SignIn_ForgotPassword/Page_RePassword";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Login" component={PageLogIn} />
      <Route path="/SignIn" component={PageSignIn} />
      <Route path="/ForgotPassword" component={PageForgotPassword} />
      <Route path="/RePassword" component={PageRePassword} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
