import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { connect } from "react-redux"
import { LOG_OUT } from '../../../config/ActionType';
class LogOutButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.logout(false);
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <Button outline color="danger" onClick={this.handleClick}>Đăng Xuất</Button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({ logout: (isLoggedIn) => dispatch({ type: LOG_OUT, isLoggedIn }) })

export default connect(null, mapDispatchToProps)(LogOutButton);