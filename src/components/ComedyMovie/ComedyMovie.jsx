
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, CardHeader, Container, Row, Button
} from 'reactstrap';
import imgMovie from '../../assets/img/3.jpg';
import './ComedyMovie.scss'
import CardItem from  "../CardItem/CardItem"

const listItem = [{img: imgMovie},{img: imgMovie},{img: imgMovie},{img: imgMovie}];

export default class ComedyMovie extends Component {
    render() {
        return (
            <div className="pt-3">
                <Container>
                    <Row>
                        <Card>
                            <CardHeader><a href = "#">Phim hài</a></CardHeader>
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
