
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, CardHeader, Container, Row, Button
} from 'reactstrap';
import imgMovie from '../../assets/img/2.jpg';
import './MovieMostFamous.scss'
import CardItem from  "../CardItem/CardItem"

const listItem = [{img: imgMovie},{img: imgMovie},{img: imgMovie},{img: imgMovie}];

export default class MovieMostFamous extends Component {
    render() {
        return (
            <div className="pt-3">
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
