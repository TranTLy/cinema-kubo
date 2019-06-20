import React, { Component } from "react";
import Footer from "./components/Customer/Footer/Footer";
// import MostFamousMovie from "./components/Customer/MostFamousMovie/MostFamousMovie";
// import AminationMovie from "./components/Customer/AminationMovie/AminationMovie";
import SectionFilm from "./components/Customer/CardFilm/SectionFilm";
import Poster from "./components/Customer/Poster/Poster";
import BoxOffice from "./components/Customer/BoxOffice/BoxOffice";
import Header from "./components/Customer/Header/Header";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: this.props.films || []
    };
  }

  componentDidMount = () => {
    console.log("didmount");
  };

  componentWillReceiveProps = nextProps => {
    console.log("recive props");
    if (nextProps.films !== this.state.films) {
      this.setState({ films: nextProps.films });
    }
  };

  render() {
    let mostMovie;
    let newMovie;
    let oldMovie;
    let date = new Date();
    console.log("date", date);
    if (this.state.films) {
      let activeMovie = this.state.films.filter(film => {
        let dateFilm = new Date(film.releaseDate);
        console.log("dateFilm", dateFilm);
        return dateFilm < date && film.isActive === true;
      });

      mostMovie = activeMovie.sort((a, b) =>
        a.rate > b.rate
          ? -1
          : a.rate === b.rate
          ? a.point > b.point
            ? -1
            : 1
          : 1
      );

      newMovie = this.state.films
        .filter(film => {
          let dateFilm = new Date(film.releaseDate);
          return dateFilm > date && film.status === true;
        })
        .sort((a, b) =>
          a.rate > b.rate
            ? -1
            : a.rate === b.rate
            ? a.point > b.point
              ? -1
              : 1
            : 1
        );

      oldMovie = this.state.films
        .filter(film => {
          let dateFilm = new Date(film.releaseDate);
          console.log("dateFilm", dateFilm);
          return dateFilm < date && film.status === true;
        })
        .sort((a, b) => (a.point > b.point ? 1 : -1));
      console.log("new", newMovie);
      console.log("old", oldMovie);
      console.log("most", mostMovie);
    }
    return (
      <div>
        <Header />
        <Poster />
        <SectionFilm movie={mostMovie} title="Phim nổi bật nhất" />
        <SectionFilm movie={newMovie} title="Phim sắp chiếu" />
        <SectionFilm movie={oldMovie} title="Phim đang chiếu" />

        <Footer className="mt-0" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.films.data
  };
}

export default connect(mapStateToProps)(App);
