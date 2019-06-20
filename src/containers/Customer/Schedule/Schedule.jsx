import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import Menu from '../../../components/Customer/Menu/Menu';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Button } from 'reactstrap';

import './Schedule.scss'

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrandOption: 0,
            branchs: [
                {
                    id: 1,
                    name: "Kubo Vạn Hanh",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                },
                {
                    id: 2,
                    name: "Kubo Bến Thành",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                },
                {
                    id: 3,
                    name: "Kubo Thủ Đức",
                    address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
                }
            ],

            movies: [
                {
                    id: 1,
                    name: "Game Of Thrones",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    type: "Cuộc sống",
                    releaseDate: "April 1, 2019",
                    duration: "02 giờ 50 phút",
                    director: "Grace Belly",
                    actors: " Alexander Cattly, Greta Garbo",
                    language: "Tiếng Anh",
                    age: "",
                    price: 80000,
                    isActive: true,
                    rate: 4.5,
                    point: 2,
                    img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_8-1-196x336.jpg"
                },
                {
                    id: 2,
                    name: "Game Of Thrones",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    type: "Cuộc sống",
                    releaseDate: "April 1, 2019",
                    duration: "02 giờ 50 phút",
                    director: "Grace Belly",
                    actors: " Alexander Cattly, Greta Garbo",
                    language: "Tiếng Anh",
                    age: "",
                    price: 80000,
                    isActive: true,
                    rate: 4.5,
                    point: 2,
                    img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_9-1-196x336.jpg"
                },
                {
                    id: 3,
                    name: "Game Of Thrones",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    type: "Cuộc sống",
                    releaseDate: "April 1, 2019",
                    duration: "02 giờ 50 phút",
                    director: "Grace Belly",
                    actors: " Alexander Cattly, Greta Garbo",
                    language: "Tiếng Anh",
                    age: "",
                    price: 80000,
                    isActive: true,
                    rate: 4.5,
                    point: 2,
                    img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_7-1-196x336.jpg"
                }],

            allSchedules: [{
                branch: 1,
                movie: 1,
                startTime: "09:00 12/05/2019",
                room: "A1",
                sumTicket: 60,
                availableTicket: 16
            }, {
                branch: 2,
                movie: 2,
                startTime: "09:00 12/05/2019",
                room: "B1",
                sumTicket: 60,
                availableTicket: 16
            }, {
                branch: 3,
                movie: 3,
                startTime: "19:00",
                room: "A2",
                sumTicket: 60,
                availableTicket: 16
            }, {
                branch: 1,
                movie: 3,
                startTime: "17:00",
                room: "A3",
                sumTicket: 60,
                availableTicket: 16
            }],
            schedules: [],

            currentBranch: 0
        }
        // this.onSelectBrand = this.onSelectBrand.bind(this);
    }

    componentDidMount() {
        this.setState({ schedules: this.state.allSchedules, currentBranch: this.state.allBrandOption });

    }

    onSelectBrand = () => {
        const select = document.getElementById("select-branch");
        const idBranch = select.value;

        if (idBranch != this.state.currentBranch) {
            if (idBranch == this.state.allBrandOption) {
                this.setState({
                    schedules: this.state.allSchedules
                })
            }
            else {
                const results = this.state.allSchedules;
                const newSchelude = [...results.filter((item) => item.branch == idBranch)];
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
                {/* <Menu /> */}
                <Container className="schedule-wrap">
                    <div className="search">
                        <div className="search-branch">
                            Chi nhánh
                             <select id="select-branch" onChange={() => this.onSelectBrand()}>
                                <option value={this.state.allBrandOption}>Tất cả</option>)
                                {
                                    this.state.branchs.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>)

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
                                const branch = this.state.branchs.filter((item) => item.id == schedule.branch)[0];
                                const _movie = this.state.movies.filter((item) => item.id == schedule.movie)[0];
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
                <Footer />
            </div>
        );
    }
}

export default Schedule;
