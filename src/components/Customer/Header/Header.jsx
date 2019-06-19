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
import { connect } from "react-redux"
import { READ_CATEGORY } from '../../../config/ActionType';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            data: this.props.data
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            this.setState({ isLoggedIn: nextProps.isLoggedIn })
        }
        if (nextProps.data !== this.state.data) {
            this.setState({ data: nextProps.data })
        }
    };
    componentDidMount() {
        this.props.read();
    }
    render() {
        let button;
        if (!this.state.isLoggedIn) {
            button = <LogInButton ></LogInButton>
        }
        else {
            button = <LogOutButton ></LogOutButton>
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
                                            {this.state.data !== null ? this.state.data.map(type => <DropdownItem>{type.name}</DropdownItem>) : <DropdownItem></DropdownItem>}
                                            {/* <DropdownItem>
                                                Tâm lý - tình cảm
                                            </DropdownItem>
                                            <DropdownItem>
                                                Kinh dị
                                            </DropdownItem>
                                            <DropdownItem />
                                            <DropdownItem>
                                                Hài
                                            </DropdownItem> */}
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

function mapStateToProps(state) {
    console.log("state", state);
    return {
        isLoggedIn: state.login.isLoggedIn,
        loading: state.categorys.loading,
        data: state.categorys.data || [],
        error: state.categorys.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        read: () => dispatch({ type: READ_CATEGORY })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);