import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header'
import Footer from '../../../components/Customer/Footer/Footer'
import Menu from '../../../components/Customer/Menu/Menu';
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
