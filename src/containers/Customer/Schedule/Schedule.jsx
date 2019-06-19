import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import Menu from '../../../components/Customer/Menu/Menu';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Button } from 'reactstrap';
import {connect} from 'react-redux';
import { Loading } from '../../../components'
import './Schedule.scss'
import {READ_SCHEDULE, READ_BRANCH} from  '../../../config/ActionType';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrandOption: 0,
            branchs:[],
            allSchedules:[],
            schedules: [],
            currentBranch: 0,
            isLoading: true
        }
        // this.onSelectBranch = this.onSelectBranch.bind(this);
    }

    
    componentWillReceiveProps = (nextProps) => {
        if (!nextProps.schedule.loading) {
            console.log("onchange in receive props", nextProps)
            // this.setState({ branches: nextProps.branches.data,  })
            this.setState({ 
                schedules: nextProps.schedule.data,
                allSchedules: nextProps.schedule.data,
                currentBranch:  this.state.allBrandOption,
                branchs: nextProps.branch.data,
                isLoading: false
            });
        }
    }
    
    componentDidMount() {
        console.log("on did mount");
        this.props.readSchedule();
        this.props.readBranch();

    }

    onSelectBranch = () => {
        const select = document.getElementById("select-branch");
        const idBranch = select.value;

        if (idBranch != this.state.currentBranch) {
            if (idBranch === this.state.allBrandOption) {
                this.setState({
                    schedules: this.state.allSchedules
                })
            }
            else {
                const results = this.state.allSchedules;
                const newSchelude = [...results.filter((item) => item.idroom.idbranch === idBranch)];
                console.log("new schedule: ", newSchelude);
                this.setState({
                    schedules: newSchelude
                })
            }
        }
        else {
            //do nothing
        }
        this.setState({ currentBranch: idBranch });
    }

    onChangeDate = () => {
        const input = document.getElementById("select-date");
        const date = input.value;
        //TODO: loc thoi gian lich chieu phim
        if (date == "") {
            console.log("haven't choosen");
        }
        else {
            console.log("date chose: ", date);
        }


    }

    render() {
        return (
            <div>
                <head>
                </head>
                <Header />
                <Menu />
                {
                    this.state.isLoading? 
                    (<Loading/>) :
                    <Container className="schedule-wrap">
                    <div className="search">
                        <div className="search-branch">
                            Chi nhánh
                             <select id="select-branch" onChange={() => this.onSelectBranch()}>
                                <option value={this.state.allBrandOption}>Tất cả</option>)
                                {
                                    this.state.branchs.map((item) => {
                                        return (
                                            <option value={item._id}>{item.name}</option>)

                                    })
                                }
                            </select>
                        </div>
                        <div className="search-date">
                            Thời gian
                            <input id="select-date" type="date" name="date" onChange={() => this.onChangeDate()} />
                        </div>
                    </div>
                    
                    <div className="list-schedules">
                        {
                            this.state.schedules.map((schedule) => {
                                // const branch = this.state.branchs.filter((item) => item.id == schedule.branch)[0];
                                // const _movie = this.state.movies.filter((item) => item.id == schedule.movie)[0];
                                 
                                const branch = this.state.branchs.filter((item) => item._id == schedule.idroom.idbranch)[0];
                                const _movie = schedule.idfilm;
                                return (
                                    <div className="schedule">
                                        <CardItemDetail movie={_movie} />
                                        <div className="detail-schedule">
                                            <div className="title"><div> <i class="fas fa-film"></i> Lịch chiếu</div></div>
                                            <div><span className="lable">Chi nhánh: </span>{branch.name}</div>
                                            <div><span className="lable">Địa chỉ: </span>{branch.address}</div>
                                            <div><span className="lable">Thời gian bắt đầu: </span>{schedule.startTime}</div>
                                            <div><span className="lable">Phòng: </span>{schedule.room}</div>
                                            <div><span className="lable">Số vé còn: </span>{schedule.availableTicket} vé/ tổng {schedule.sumTicket} vé</div>
                                            <div className="btn-book-ticket"> <Button class="btn" ><a href="/book-ticket">Đặt vé </a> </Button></div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Container>
                 }
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        schedule: state.schedule,
        branch: state.branch
    }
}
function mapDispatchToProps(dispatch) {
    return {
        readSchedule: () => dispatch({ type: READ_SCHEDULE }),
        readBranch: () => dispatch ({type: READ_BRANCH})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
