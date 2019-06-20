import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button, CardBody
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import imgFilm from '../../../assets/img/NgoiDenKiQuai.jpg'
import imgFilm1 from '../../../assets/img/3.jpg';
import CardItem from "../CardItem/CardItem"
import "./CategoryFilm.scss"
import { connect } from "react-redux"
import SectionFilm from '../CardFilm/SectionFilm';


class CategoryFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: this.props.films
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.films !== this.state.films) {
            this.setState({ films: nextProps.films });
        }
    }
    render() {
        const values = this.props.location.search;
        const params = new URLSearchParams(values);
        const id = params.get('id');
        let title = "";
        let filmBytype = this.state.films.filter(film => film.type._id == id);
        if (filmBytype[0]) {
            title = filmBytype[0].type.name;
        }
        return (
            <div>
                <Header />
                <div className="SectionFilm">
                    <SectionFilm movie={filmBytype} title={title}></SectionFilm>
                </div >
                <Footer />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        films: state.films.data
    }
}

export default connect(mapStateToProps)(CategoryFilm)