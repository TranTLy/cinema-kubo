import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import imgFilm from '../../assets/img/NgoiDenKiQuai.jpg'

const listItem = [{ img: imgFilm }, { img: imgFilm }, { img: imgFilm }, { img: imgFilm }];
export default class DetailFilm extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <Container>
                    {/* <Row>
                        <Col sm={5}>
                            <hr></hr>
                        </Col>
                        <Col sm={2}>
                            <p>Menu</p>
                        </Col>
                        <Col sm={5}>
                            <hr></hr>
                        </Col>
                    </Row> */}
                </Container>
                <Footer />
            </div>
        )
    }
}