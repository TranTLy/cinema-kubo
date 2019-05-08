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
    DropdownItem, Container, Row
} from 'reactstrap';
import './header.scss'
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
            <div className="header">
                <Container>
                    <Row>
                        <Navbar expand="md">
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
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Hài
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <NavLink href="#">Giới thiệu</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </div>
        );
    }
}