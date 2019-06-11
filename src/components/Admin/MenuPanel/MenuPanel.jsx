import React, { Component } from 'react';
import './MenuPanel.scss'

class MenuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="menu-panel-admin">
            <div className="menu-panel-admin__menu">
                <div className="menu-panel-admin__menu--tab -branch -active">Thống Kê</div>
                <div className="menu-panel-admin__menu--tab -branch">Chi Nhánh</div>
                <div className="menu-panel-admin__menu--tab -branch">Phim</div>
                <div className="menu-panel-admin__menu--tab -branch">Lịch Chiếu</div>
                <div className="menu-panel-admin__menu--tab -branch">Ưu đãi</div>
            </div>
        </div>);
    }
}

export default MenuPanel;