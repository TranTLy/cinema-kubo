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
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import About from './containers/About/About';
import Schedule from './containers/Schedule/Schedule';
import BookTicket from './containers/BookTicket/BookTicket';
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Login" component={PageLogIn} />
      <Route path="/SignIn" component={PageSignIn} />
      <Route path="/ForgotPassword" component={PageForgotPassword} />
      <Route path="/RePassword" component={PageRePassword} />
			<Route path="/home" component={Home} />
			<Route path="/profile" component={Profile} />
			<Route path="/about" component={About} />
			<Route path="/schedule" component={Schedule} />
			<Route path="/book-ticket" component={BookTicket} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
