
import React, { Component } from 'react';
import {
    Card, CardBody, CardHeader, Container, Row
} from 'reactstrap';
import imgMovie from '../../assets/img/2.jpg';
import './MostFamousMovie.scss'
import CardItem from "../CardItem/CardItem"

const listItem = [{ img: imgMovie }, { img: imgMovie }, { img: imgMovie }, { img: imgMovie }]

export default class MovieMostFamous extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <div className="home-film">
                            {/* <CardHeader >Nổi bậc nhất</CardHeader> */}
                            {/* <hr className="mt-0"></hr> */}
                            <CardBody className="flexDirection: 'row, w-100">
                                <CardItem listItem={listItem}></CardItem>
                            </CardBody>
                        </div>
                    </Row>
                </Container>

            </div>
        );
    }
};
