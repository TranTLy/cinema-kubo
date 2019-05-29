import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default class LogOutButton extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                <Button outline color="danger" onClick={this.props.onClick}>Đăng Xuất</Button>
                </Link>
            </div>
        )
    }
}