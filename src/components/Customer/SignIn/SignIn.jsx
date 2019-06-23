import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import './SignIn.scss'
import { Link } from "react-router-dom"
export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.haneleInputEmail = this.haneleInputEmail.bind(this);
        this.handleInputPassWord = this.handleInputPassWord.bind(this);
        this.handleInputRePassWord = this.handleInputRePassWord.bind(this);
        this.handleInputBirthday = this.handleInputBirthday.bind(this);
        this.handleInputPhone = this.handleInputPhone.bind(this);
        this.state = {
            email: "",
            password: "",
            birthday: "",
            username: "",
            phone: "",
            re_password: "",
            address: ""
        }
    }
    handleInputBirthday = e => {
        this.setState({birthday: e.target.value});
    }
    handleInputPassWord = e => {
        this.setState({password: e.target.password});
    }
    haneleInputEmail = e => {
        this.setState({email: e.target.value});
    }
    handleInputBirthday = e => {
        this.setState({birthday: e.target.value});
    }
    handleInputPhone = e => {
        this.setState({phone: e.target.value})
    }
    handleSignInClick() {
        
    }
    render() {
        return (
            <Form className="mt-5 w-50 f-signin">
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
                        <Input className="text-secondary" type="text" name="username" id="username"
                        placeholder="Vui lòng nhập tên của bạn" value={this.state.username}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-envelope fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="email" name="email" id="email"
                            placeholder="Địa chỉ email của bạn" value={this.state.email}
                        />
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-key fa-2x"></i>
                    </Col>
                    <Col sm={{ size: 8 }}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Nhập mật khẩu của bạn" value={this.state.password}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-lock fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="re-password" name="re-password" id="re-password"
                            placeholder="Nhập lại mật khẩu" value={this.state.re_password}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-birthday-cake fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="date" name="birthday" id="birthday"
                            placeholder="Chọn ngày tháng năm sinh của bạn" value={this.state.birthday}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-mobile-alt fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="text" name="phone" id="phone"
                            placeholder="Nhập số điện thoại của bạn" value={this.state.phone}
                        />
                    </Col>
                </FormGroup>
                {/* <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="text" name="address" id="address"
                            placeholder="Vui lòng nhập địa chỉ" value={this.state.address}
                        />
                    </Col>
                </FormGroup> */}
                {/* <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-film fa-2x"></i>
                    </Col>
                    <Label sm={8}>Thể loại phim yêu thích của bạn?</Label>
                </FormGroup>
                <FormGroup check row className="pt-0 mt-0">
                    <Col sm={{ offset: 1, size: 8 }} className="d-flex flexDirection: 'row',">
                        <FormGroup check className="pr-5">
                            <Label check>
                                <Input type="checkbox" id="comedy" />{' '}
                                Phim hài
                            </Label>
                        </FormGroup>
                        <FormGroup check className="pl-4">
                            <Label check>
                                <Input type="checkbox" id="honor" />{' '}
                                Phim kinh dị
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={{ offset: 1, size: 8 }} className=" d-flex flexDirection: 'row',">
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" id="action" />{' '}
                                Phim hành động
                            </Label>
                        </FormGroup>
                        <FormGroup check className="pl-3">
                            <Label check >
                                <Input type="checkbox" id="romantic" />{' '}
                                Tâm lý-tình cảm
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup > */}
                <FormGroup row className="pt-5" >
                    <Col className=" text-center">
                        <Button outline color="light" className="font-weight-bold mb-1" onClick={this.handleSignInClick}>
                            <i class="fas fa-sign-in-alt pr-2"></i>
                            Đăng ký
                        </Button>
                    </Col>
                </FormGroup>
            </Form >

        );
    }
}

