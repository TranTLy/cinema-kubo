import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input,Button } from 'reactstrap'

export default class LogIn extends Component {
    render() {
        return (
            <Form className="mt-2 w-50">
                <FormGroup className="text-center text-secondary">
                    <h3 className="font-weight-bold mb-5">Đăng nhập</h3>
                </FormGroup>
                <FormGroup row>
                    <Label for="userName" sm={3}>Tên đăng nhập</Label>
                    <Col sm={8}>
                        <Input className="text-secondary" type="text" name="userName" id="userName"
                            placeholder="Tên đăng nhập"
                            value={this.state.userName} onChange={this.handleChangeUserName} />
                    </Col>
                    <Col sm={{ offset: 3 }}>
                        <span id="check-userName">Tên đăng nhập không đúng</span>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>Mật khẩu</Label>
                    <Col sm={8}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Mật khẩu"
                            value={this.state.passWord} onChange={this.handleChangePassWord} />
                    </Col>
                    <Col sm={{ offset: 3 }}>
                        <span id="check-passWord">Mật khẩu không đúng</span>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className="text-right" sm={11}>
                        <a href="#" className="text-secondary">Quên mật khẩu?</a>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col className=" text-center">
                            <Button outline color="danger">
                                Đăng nhập
                        </Button>
                    </Col>
                </FormGroup>
            </Form>

        );
    }
}

