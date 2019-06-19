import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button, CardBody
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import imgFilm from '../../../assets/img/NgoiDenKiQuai.jpg'
import imgFilm1 from '../../../assets/img/3.jpg';
import CardItem from "../CardItem/CardItem"
import "./CategoryFilm.scss"

const listItem = [{ img: imgFilm }, { img: imgFilm1 }, { img: imgFilm }, { img: imgFilm1 }];
export default class CategoryFilm extends Component {
    render() {
        return (
            <div className="SectionFilm">
                <Header />
                <Menu />
                <Container className="content">
                    <Row className="mt-4">
                        <Col sm={4}>
                            <hr></hr>
                        </Col>
                        <Col sm={4} className="d-flex flexDirection: 'row'">
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-left-transparent.png"
                                alt=""
                            />
                            <div className="title-type-film">
                                <h4>assa</h4>
                            </div>
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-right-transparent.png"
                                alt=""
                            />
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



