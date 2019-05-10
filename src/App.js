import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieMostFamous from './components/MovieMostFamous/MovieMostFamous'
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <MovieMostFamous />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
