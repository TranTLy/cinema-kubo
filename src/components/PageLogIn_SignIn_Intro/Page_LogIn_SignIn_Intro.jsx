import React, { Component } from 'react';
import LogIn from '../LogIn/LogIn'
import SignIn from '../SignIn/SignIn'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu';
import { Card, Container, Row, Col, Button } from 'reactstrap'
import './Page_LogIn_SignIn_Intro.scss'

export default class PageLogInSignInIntro extends Component {
    constructor(props) {
        super(props);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.handleLogInClick = this.handleLogInClick.bind(this);
    }
    handleSignInClick(){
        document.getElementsByClassName('login')[0].style.display = "none";
        document.getElementsByClassName('signin')[0].style.display = "flex";
    }
    handleLogInClick(){
        document.getElementsByClassName('login')[0].style.display = "flex";
        document.getElementsByClassName('signin')[0].style.display = "none";
    }
    render() {
        return (
            <div className="page-login-sign-intro">
                <Header></Header>
                <Menu></Menu>
                <Container>
                    <Row>
                        <Card className="mt-5 w-100">
                            <div className="login">
                                <LogIn></LogIn>
                                <div className="intro w-50">
                                    <Button color="danger" onClick= {this.handleSignInClick}>Đăng kí</Button>
                                </div>
                            </div>
                            <div className="signin">
                           
                            <div className="intro w-50">
                                    <Button color="danger" onClick={this.handleLogInClick}>Đăng nhập</Button>
                                </div>
                                <SignIn></SignIn>
                            </div>
                            
                        </Card>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}