import React, { Component } from 'react';
import { Button, Container, Row,Navbar,NavbarBrand,Nav } from 'reactstrap'
import './Header.scss'
import logo from '../../assets/img/logo.png'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                    <Navbar className="w-100 pt-0"> 
                        <NavbarBrand href="#">
                        <img src={logo} alt="logo" class="d-inline-block align-top px-1"></img>
                        Kubo</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <Button outline color="danger" s>Đăng nhập</Button>
                            <Button outline color="danger">Đăng ký</Button>
                        </Nav>
                    </Navbar>
                    </Row>
                </Container>
            </div>
        );
    }
}