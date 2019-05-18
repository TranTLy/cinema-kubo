import React, { Component } from '../../../node_modules/react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu';
import './Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="">
                <Header></Header>
                <Menu></Menu>
                This is home
                <Footer></Footer>
            </div>
        );
    }
}
