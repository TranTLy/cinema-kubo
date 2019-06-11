import React, { Component } from 'react';

const MenuPanel = React.lazy(() => import('../../../components/Admin/MenuPanel/MenuPanel'));

class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="home-admin">
                <MenuPanel />
            </div>
        );
    }
}

export default HomeAdmin;