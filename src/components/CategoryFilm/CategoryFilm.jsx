import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button, CardBody
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import imgFilm from '../../assets/img/NgoiDenKiQuai.jpg'
import imgFilm1 from '../../assets/img/3.jpg';
import CardItem from "../CardItem/CardItem"
import "./CategoryFilm.scss"
const listItem = [{ img: imgFilm }, { img: imgFilm1 }, { img: imgFilm }, { img: imgFilm1 }];
export default class DetailFilm extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <Container>
                    <Row className="mt-4">
                        <Col sm={4}>
                            <hr></hr>
                        </Col>
                        <Col sm={4} className="title-category">
                            <h4>Tên thể loại phim</h4>
                        </Col>
                        <Col sm={4}>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="category-film justifyContent: 'center',alignItems: 'center',">
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}