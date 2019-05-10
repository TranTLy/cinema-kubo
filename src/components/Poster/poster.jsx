import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'
import './Poster.scss'
import { UncontrolledCarousel } from 'reactstrap';
import imgMovie_2 from '../../assets/img/poster_2.jpg';
import imgMovie_1 from '../../assets/img/poster_1.jpg';
import imgMovie_3 from '../../assets/img/poster_3.jpg';
const items = [
    {
        src: imgMovie_2,
        header: 'Phim Thằng em lý tưởng'
    },
    {
        src: imgMovie_1,
        header: 'End game',
    },
    {
        src: imgMovie_3,
        header: 'Chú gà không chân '
    }
];

export default class Poster extends Component {
    render() {
        return (
            <div className="poster">
                <Container className="content-poster">
                    <UncontrolledCarousel items={items} autoPlay={false} indicators={false} interval={false}></UncontrolledCarousel>
                </Container>
            </div>
        );
    }
}