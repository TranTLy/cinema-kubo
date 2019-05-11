
import React, { Component } from 'react';
import {
    Card, CardBody,CardHeader, Container, Row
} from 'reactstrap';
import imgMovie from '../../assets/img/2.jpg';
import './MostFamousMovie.scss'
import CardItem from  "../CardItem/CardItem"

const listItem = [{img: imgMovie},{img: imgMovie},{img: imgMovie},{img: imgMovie}];

export default class MovieMostFamous extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Card>
                            <CardHeader >Nổi bậc nhất</CardHeader>
                            <hr className="mt-0"></hr>
                            <CardBody className="flexDirection: 'row, w-100">
                               <CardItem listItem={listItem}></CardItem>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>

            </div>
        );
    }
};
