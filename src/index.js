import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PageLogIn_SignIn_Intro from './components/PageLogIn_SignIn_Intro/Page_LogIn_SignIn_Intro';
import Home from './containers/Home/Home';
const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/Login" component={PageLogIn_SignIn_Intro} />
			<Route path="/home" component={Home} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
