import React from "react";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import MostFamousMovie from "./components/MostFamousMovie/MostFamousMovie";
import ComedyMovie from "./components/ComedyMovie/ComedyMovie";
import RomanticMovie from "./components/RomanticMovie/RomanticMovie";
import Poster from "./components/Poster/Poster";
import BoxOffice from "./components/BoxOffice/BoxOffice";
import Header from "./components/Header/Header";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
function App() {
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
            <h4>Phim nổi bậc</h4>
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

export default App;
