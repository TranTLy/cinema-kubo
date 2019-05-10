import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Container, Row, Form, Input, Button, InputGroup, InputGroupAddon
} from 'reactstrap';
import './Header.scss'
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="header sticky-top">
                <Container>
                    <Row>
                        <Navbar expand="md" className="w-100">
                            <NavbarBrand href="/">Kubo</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="#">Trang chủ</NavLink>
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
                                        <NavLink href="#">Giới thiệu</NavLink>
                                    </NavItem>
                                </Nav>
                                <Form className="navbar-search d-none d-md-flex d-lg-flex ml-auto mr-4">
                                    <InputGroup className="ml-0">
                                        <Input placeholder="Tìm kiếm..." type="text" className="form-control" />
                                        <InputGroupAddon addonType="append" className="pt-1 pr-1">
                                        <a href="#">
                                        <i class="material-icons">
                                            search
                                    </i></a></InputGroupAddon>

                                    </InputGroup>
                                </Form>
                            </Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </div>
        );
    }
}