
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, CardHeader, Container, Row, Button
} from 'reactstrap';
import img from '../../assets/img/2.jpg';
import './cardItem.scss'
export default class CardItem extends Component {
    render() {
        return (
            <div className="pt-3">
                <Container>
                    <Row>
                        <Card>
                            <CardHeader >Nổi bậc nhất</CardHeader>
                            <hr className="mt-0"></hr>
                            <CardBody className="flexDirection: 'row, w-100">
                                <a href="#"><Card>
                                    <img src={img}></img>
                                </Card></a>

                                <a href="#"><Card>
                                    <img src={img}></img>
                                </Card></a>
                                <a href="#"><Card>
                                    <img src={img}></img>
                                </Card></a>
                                <a href="#"><Card>
                                    <img src={img}></img>
                                </Card></a>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>

            </div>
        );
    }
};
