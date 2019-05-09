import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Poster from "./components/Poster/poster";
import CardItem from "./components/CardItem/cardItem";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <CardItem />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
