
import React, { Component } from 'react';
import {
    Card, CardBody, CardHeader, Container, Row
} from 'reactstrap';
import imgMovie from '../../assets/img/1.jpg';
import './RomanticMovie.scss'
import CardItem from  "../CardItem/CardItem"

const listItem = [{img: imgMovie},{img: imgMovie},{img: imgMovie},{img: imgMovie}];

export default class RomanticMovie extends Component {
    render() {
        return (
            <div className="pt-3">
                <Container>
                    <Row>
                        <Card>
                            <CardHeader><a href = "#">Phim tâm lý-tình cảm</a></CardHeader>
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
