import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PageLogIn from './components/Customer/PageLogIn_SignIn_ForgotPassword/Page_LogIn';
import PageSignIn from './components/Customer/PageLogIn_SignIn_ForgotPassword/Page_SignIn';
import PageForgotPassword from './components/Customer/PageLogIn_SignIn_ForgotPassword/Page_ForgotPassword';
import PageRePassword from './components/Customer/PageLogIn_SignIn_ForgotPassword/Page_RePassword';
import DetailFilm from './components/Customer/DetailFilm/DetailFilm';
import Home from './containers/Customer/Home/Home';
import Profile from './containers/Customer/Profile/Profile';
import About from './containers/Customer/About/About';
import Schedule from './containers/Customer/Schedule/Schedule';
import BookTicket from './containers/Customer/BookTicket/BookTicket';
import CategoryFilm from './components/Customer/CategoryFilm/CategoryFilm';
import ResultSearch from './components/Customer/ResultSearch/ResultSearch';
import HomeAdmin from './containers/Admin/HomeAdmin/HomeAdmin';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/login" component={PageLogIn} />
			<Route path="/signin" component={PageSignIn} />
			<Route path="/forgotpassword" component={PageForgotPassword} />
			<Route path="/repassword" component={PageRePassword} />
			<Route path="/home" component={Home} />
			<Route path="/profile" component={Profile} />
			<Route path="/about" component={About} />
			<Route path="/schedule" component={Schedule} />
			<Route path="/book-ticket" component={BookTicket} />
			<Route path="/detailfilm" component={DetailFilm} />
			<Route path="/categoryfilm" component={CategoryFilm} />
			<Route path="/resultfilm" component={ResultSearch} />
			<Route path="/admin" component={HomeAdmin} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
