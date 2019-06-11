import React, { Component } from 'react';

import { MenuPanel } from '../../../components';
class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("home component: ", MenuPanel);
        return (
            <div className="admin home-admin">
                <MenuPanel currentTab={1} />

            </div>
        );
    }
}

export default HomeAdmin;
