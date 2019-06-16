import React, { Component } from 'react';
import {
    Button, Container, Row, Navbar, NavbarBrand, Nav, Collapse,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import './Header.scss'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }
    handleClick() {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
        // if(this.)
        // if (this.state.isLoggedIn) {
        //     window.location.href = "/login";
        // }
    }

    render() {
        let button;
        console.log(this.state.isLoggedIn);
        if (!this.state.isLoggedIn) {
            button = <LogInButton onClick={this.handleClick}></LogInButton>
        }
        else {
            button = <LogOutButton onClick={this.handleClick}></LogOutButton>
        }

        return (
            <div className="header">
                <Container>
                    <Row>
                        <Navbar expand="md">
                            <NavbarBrand href="/" className="pt-0">
                                <img src={logo} alt="logo" class="d-inline-block align-top"></img>
                                Kubo</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar className="pt-0 pb-2">
                                    <NavItem>
                                        <NavLink href="/">Trang chủ</NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Thể loại
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Tâm lý - tình cảm
                                            </DropdownItem>
                                            <DropdownItem>
                                                Kinh dị
                                            </DropdownItem>
                                            <DropdownItem />
                                            <DropdownItem>
                                                Hài
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <NavLink href="about">Giới thiệu</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <div className="ml-auto d-flex mt-2 mr-2">

                            {button}
                            <Link to="/signin">
                                <Button outline color="danger" className="ml-2">Đăng ký</Button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}