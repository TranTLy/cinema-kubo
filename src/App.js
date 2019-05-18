import React from "react";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import MostFamousMovie from "./components/MostFamousMovie/MostFamousMovie";
import ComedyMovie from "./components/ComedyMovie/ComedyMovie";
import RomanticMovie from "./components/RomanticMovie/RomanticMovie";
import Poster from "./components/Poster/Poster";
import Header from "./components/Header/header";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Poster />
      <Container className="pt-4">
        <MostFamousMovie />
      </Container>
      <Container className="pt-4">
        <ComedyMovie />
      </Container>
      <Container className="pt-4">
        <RomanticMovie />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
