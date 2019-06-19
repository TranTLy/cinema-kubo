import React, { Component } from "react";
import Menu from "./components/Customer/Menu/Menu";
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
    let romantic;
    let animation;
    if (this.state.films) {
      mostMovie = this.state.films.sort((a, b) => a.rate > b.rate);
      // console.log("most film", mostMovie);
      romantic = this.state.films.filter(
        film => film.type._id === "5d0087a1943583288452e3fe"
      );
      // .slice(0, 4);
      // console.log("romantic", romantic);
      animation = this.state.films.filter(
        film => film.type._id === "5d060546e84db113bc2f61b4"
      );
      // .slice(0, 4);
    }
    return (
      <div className="App">
        <Header />
        <Menu />
        <Poster />
        <SectionFilm movie={mostMovie} title="Phim nổi bật nhất" />
        <SectionFilm movie={romantic} title="Phim nổi bật sdsd nhất" />
        <SectionFilm movie={animation} title="Phim nổi bật sdsd sdsd nhất" />
        {/* <Container className="content">
          <Row className="mt-4">
            <Col sm={4}>
              <hr />
            </Col>
            <Col sm={4} className="d-flex flexDirection: 'row'">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-left-transparent.png"
                alt=""
              />
              <div className="title-type-film">
                <h4>Phim nổi bật nhất</h4>
              </div>

              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-right-transparent.png"
                alt=""
              />
            </Col>
            <Col sm={4}>
              <hr />
            </Col>
          </Row>
          <MostFamousMovie listItem={mostMovie} />
        </Container>
        <Container className="content">
          <Row className="mt-4">
            <Col sm={4}>
              <hr />
            </Col>
            <Col sm={4} className="d-flex flexDirection: 'row'">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-left-transparent.png"
                alt=""
              />
              <div className="title-type-film">
                <a href="/">
                  <h4>Phim tâm lý - tình cảm</h4>
                </a>
              </div>

              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-right-transparent.png"
                alt=""
              />
            </Col>
            <Col sm={4}>
              <hr />
            </Col>
          </Row>
          <RomanticMovie listItem={romantic} />
        </Container>
        <Container className="content">
          <Row className="mt-4">
            <Col sm={4}>
              <hr />
            </Col>
            <Col sm={4} className="d-flex flexDirection: 'row'">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-left-transparent.png"
                alt=""
              />
              <div className="title-type-film">
                <h4>Phim hoạt hình</h4>
              </div>

              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-right-transparent.png"
                alt=""
              />
            </Col>
            <Col sm={4}>
              <hr />
            </Col>
          </Row>
          <AminationMovie listItem={animation} />
    </Container>*/}
        <Footer className="mt-0" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state.films.data);
  return {
    films: state.films.data
  };
}

export default connect(mapStateToProps)(App);
