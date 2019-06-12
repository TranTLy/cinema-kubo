import React, { Component } from 'react';

import './HomeAdmin.scss';
import { MenuPanel } from '../../../components';
import Branch from '../Branch/Branch';
import CinemaAdmin from '../CinemaAdmin/CinemaAdmin';

class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 3,
            tabs: [
                {
                    name: "Thống kê"
                },
                {
                    name: "Chi nhánh"
                },
                {
                    name: "Phim"
                },
                {
                    name: "Lịch chiếu"
                },
                {
                    name: "Ưu đãi"
                }
            ]
        }
    }
    getTabContent = () => {
        switch (this.state.currentTab) {
            case 0: //statistic
                break;
            case 1: //branch
                return (<Branch />);
            case 2: //cinema
                return <CinemaAdmin />;
            case 3:
                return (<div />);
            default:
                return ("");
        }
    }

    changeCurrentTab = (tabIndex) => {
        this.setState({ currentTab: tabIndex });
    }
    render() {
        return (
            <div className="admin home-admin">
                <MenuPanel changeCurrentTab={this.changeCurrentTab} tabs={this.state.tabs} currentTab={this.state.currentTab} />
                {this.getTabContent()}
            </div>
        );
    }
}

export default HomeAdmin;
