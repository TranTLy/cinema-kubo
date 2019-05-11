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
                           />
                    </Col>
                   
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>Mật khẩu</Label>
                    <Col sm={8}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Mật khẩu"
                            />
                    </Col>
                  
                </FormGroup>
                <FormGroup row>
                    <Col className="text-right" sm={11}>
                        <a href="#" className="text-secondary">Quên mật khẩu?</a>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col className=" text-center">
                            <Button color="danger">
                                Đăng Ký
                        </Button>
                    </Col>
                </FormGroup>
            </Form>

        );
    }
}

