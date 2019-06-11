import React, { Component } from 'react';
import './MenuPanel.scss'

export class MenuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let tabs = document.getElementsByClassName("menu-panel-admin-left__menu--tab");
        if (tabs != null) {
            tabs[this.props.currentTab].classList.add("-active");
        }
    }
    render() {

        return (
            <div className="menu-panel-admin">
                <div className="menu-panel-admin-left">
                    <div className="menu-panel-admin-left__space"></div>
                    <div className="menu-panel-admin-left__menu">
                        <div className="menu-panel-admin-left__menu--tab -statistic"><a href="admin/statistic">Thống Kê</a></div>
                        <div className="menu-panel-admin-left__menu--tab -branch"><a href="admin/branch">Chi Nhánh</a></div>
                        <div className="menu-panel-admin-left__menu--tab -movie"><a href="admin/movie">Phim</a></div>
                        <div className="menu-panel-admin-left__menu--tab -schedule"><a href="admin/schedule">Lịch Chiếu</a></div>
                        <div className="menu-panel-admin-left__menu--tab -promotion"><a href="admin/promotion">Ưu đãi</a></div>
                        <div className="menu-panel-admin-left__infor-bottom">
                            © 2019 Kubo Viet Nam <br /> All right reserved
                 </div>
                    </div>
                </div>
                <div className="menu-panel-admin-right">
                    <i class="fas fa-user"></i>
                    <span>
                    </span>
                </div>
            </div>)
    }
}

