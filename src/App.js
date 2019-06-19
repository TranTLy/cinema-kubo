import React, { Component } from 'react';
import Menu from './components/Customer/Menu/Menu';
import Footer from './components/Customer/Footer/Footer';
import MostFamousMovie from './components/Customer/MostFamousMovie/MostFamousMovie';
import ComedyMovie from './components/Customer/ComedyMovie/ComedyMovie';
import RomanticMovie from './components/Customer/RomanticMovie/RomanticMovie';
import Poster from './components/Customer/Poster/Poster';
import BoxOffice from './components/Customer/BoxOffice/BoxOffice';
import Header from './components/Customer/Header/Header';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { READ_FILM } from './config/ActionType';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: this.props.films || []
		}
	}

	componentDidMount = () => {
		console.log("didmount");
		this.props.readFilms();
	}

	componentRecieveNextProps = (nextProps) => {
		if (nextProps.films != this.state.films) {
			this.setState({ films: nextProps.films });
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Menu />
				<Poster />
				<Container className="content">
					<Row className="mt-4">
						<Col sm={5}>
							<hr />
						</Col>
						<Col sm={2}>
							<h4>Phim nổi bật</h4>
						</Col>
						<Col sm={5}>
							<hr />
						</Col>
					</Row>
					<MostFamousMovie />
				</Container>
				<Container className="content">
					<Row className="mt-4">
						<Col sm={5}>
							<hr />
						</Col>
						<Col sm={2}>
							<h4>Phim tâm lý - tình cảm</h4>
						</Col>
						<Col sm={5}>
							<hr />
						</Col>
					</Row>
					<RomanticMovie />
				</Container>
				<Container className="content">
					<Row className="mt-4">
						<Col sm={5}>
							<hr />
						</Col>
						<Col sm={2}>
							<h4>Phim hài</h4>
						</Col>
						<Col sm={5}>
							<hr />
						</Col>
					</Row>
					<ComedyMovie />
				</Container>
				<Row className="feedback">
					<Container>
						<Row />
					</Container>
				</Row>
				<Footer className="mt-0" />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log("state", state);
	return {
		films: state.films
	}
}

function mapDispatchToProps(dispatch) {
	return {
		readFilms: () => dispatch({ type: READ_FILM })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
