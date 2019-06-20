import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Navbar,
    Container, Row, Form, Input, InputGroup, InputGroupAddon
} from 'reactstrap';
import './Menu.scss'
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.addStickyTop = this.addStickyTop.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            menu: 'menu'
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.addStickyTop, false);
        if (window.location.href.includes("/about")) {
            console.log("href fs", window.location.href);
            document.getElementsByClassName('home')[0].style.display = "none";
            document.getElementsByClassName('detail-film')[0].style.display = "none";
            document.getElementsByClassName('about')[0].style.display = "block";
        }
    }
    addStickyTop() {
        if (window.pageYOffset > 60) {
            this.setState({ menu: 'menu sticky-top' })
        }
        else {
            this.setState({ menu: 'menu' })
        }
        // console.log(window.pageYOffset);
        // else {
        //     document.getElementsByClassName('menu').
        // }
    }
    addBreadCrumb() {
        console.log("href", window.location.href);
        const link = window.location.href;
        if (link.includes("/about")) {
            console.log("href fs", window.location.href);
            document.getElementsByClassName('home')[0].style.display = "none";
            document.getElementsByClassName('detail-film')[0].style.display = "none";
            document.getElementsByClassName('about')[0].style.display = "block";
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        return (
            <div >
                <Container>
                    <Row>
                        <Navbar expand="md" className="w-100 pt-0">
                            <div className="pt-1 content-breadcrumb">
                                <Breadcrumb className="text-white home">
                                    <BreadcrumbItem active>Trang chủ</BreadcrumbItem>
                                </Breadcrumb>
                                <Breadcrumb className="text-white detail-film  itembread">
                                    <BreadcrumbItem className="text-white"><a href="/">Trang chủ</a></BreadcrumbItem>
                                    <BreadcrumbItem className="text-white" active><a href="/">Chi tiết phim</a></BreadcrumbItem>
                                </Breadcrumb>
                                <Breadcrumb className="text-white about itembread">
                                    <BreadcrumbItem className="text-white"><a href="/">Trang chủ</a></BreadcrumbItem>
                                    <BreadcrumbItem className="text-white">Giới thiệu</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                            <Form className="navbar-search d-none d-md-flex d-lg-flex ml-auto">
                                <InputGroup className="ml-0">
                                    <Input placeholder="Tìm kiếm..." type="text" className="form-control" />
                                    <InputGroupAddon addonType="append" className=" pr-2 pl-1">
                                        <i class="fas fa-search"></i>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Navbar>
                    </Row>
                </Container>
            </div>
        );
    }
}