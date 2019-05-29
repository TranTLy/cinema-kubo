import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import './LogIn.scss'
import { Link } from "react-router-dom"
export default class LogIn extends Component {
    render() {
        return (
            <Form className="mt-2 w-50 f-login">
                <FormGroup className="d-flex flexDirection: 'row',justifyContent: 'space-between', title-login-signin">
                    <Col sm={5}>
                        <Link to="/login">
                            <h4 className="font-weight-bold ">Đăng nhập</h4>
                        </Link>
                    </Col>
                    <Col sm={2}>
                        <hr className="mt-3"></hr>
                    </Col>
                    <Col sm={5}>
                        <Link to="/signin">
                            <h4 className="font-weight-bold ">Đăng Ký</h4>
                        </Link>
                    </Col>
                </FormGroup>
                <hr className="mt-0"></hr>
                <FormGroup row className="mt-5 d-flex flexDirection: 'row',">
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-user fa-2x"></i>
                    </Col>
                    <Col sm={{ size: 8 }} >
                        <Input className="text-secondary" type="text" name="userName" id="userName"
                            placeholder="Nhập tên đăng nhập của bạn"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-key fa-2x"></i>
                    </Col>

                    <Col sm={{ size: 8 }}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Nhập mật khẩu của bạn"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className="text-right" sm={10}>
                        <Link className="text-white" to="/forgotpassword">
                            <h6>Quên mật khẩu ?</h6>
                        </Link>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={4}>
                        <hr></hr>
                    </Col>
                    <Col sm={4}>
                        <h6>Hoặc đăng nhập qua</h6>
                    </Col>
                    <Col sm={4}>
                        <hr></hr>
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col className="d-flex flexDirection: 'row',">
                        <Col sm={{ size: 2, offset: 3 }}>
                            <Button color="primary" className="d-flex flexDirection: 'row',">
                                <i class="fab fa-facebook-f pt-1 pr-1"></i>
                                Facebook</Button>
                        </Col>
                        <Col sm={{ size: 2, offset: 1 }}>
                            <Button color="danger" className="d-flex flexDirection: 'row',">
                                <i class="fab fa-google pt-1 pr-1"></i>
                                Google</Button>
                        </Col>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ offset: 3 }} className="d-flex flexDirection: 'row',">
                        <h6>Bạn chưa có tài khoản? </h6>
                        <Link to="/signin">
                            <h6 className="pl-1 font-weight-light">Đăng ký ngay</h6>
                        </Link>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className=" text-center">
                        <Link to="profile">
                            <Button outline color="light" className="font-weight-bold mb-1">
                                <i class="fas fa-user-alt pr-2"></i>
                                Đăng nhập
                        </Button>
                        </Link>
                    </Col>
                </FormGroup>

            </Form>
        );
    }
}

