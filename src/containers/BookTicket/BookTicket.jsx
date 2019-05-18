import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import CardItemDetail from '../../components/CardItemDetail/CardItemDetail'
import { Container, Button } from 'reactstrap';

import './BookTicket.scss'

class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    useInternationCard =() =>{
        console.log("use internation card");
    }
    render() {
        const branch =
        {
            id: 1,
            name: "Kubo Vạn Hanh",
            address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
        };
        const schedule = {
            branch: 1,
            movie: 1,
            startTime: "09:00 12/05/2019",
            room: "A1",
            sumTicket: 60,
            availableTicket: 16
        };
        const myMovie =
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
        };
        return (
            <div>
                <head></head>
                <Header />
                <Menu />
                <Container className="book-ticket-wrap">
                    <div className="schedule">
                        <CardItemDetail movie={myMovie} />
                        <div className="detail-schedule">
                            <div className="title"><div> <i class="fas fa-film"></i> Lịch chiếu</div></div>
                            <div><span className="lable">Chi nhánh: </span>{branch.name}</div>
                            <div><span className="lable">Địa chỉ: </span>{branch.address}</div>
                            <div><span className="lable">Thời gian bắt đầu: </span>{schedule.startTime}</div>
                            <div><span className="lable">Phòng: </span>{schedule.room}</div>
                            <div><span className="lable">Số vé còn: </span>{schedule.availableTicket} vé/ tổng {schedule.sumTicket} vé</div>
                        </div>
                    </div>
                    <div className="book-ticket-option">
                        <div className="title"><span>Thông tin đặt vé</span></div>

                        <ol className="options">
                            <li className="option">
                                <span className="lable number">Số lượng vé: </span>
                                <input type="number" name="number" id="number-ticket" /><br />
                            </li>
                            <li className="option">
                                <span className="lable number">Chọn ghế ngồi: </span>
                                <span>TODO HERE</span>
                            </li>
                            <li className="option">
                                <span className="lable number">Hình thức thanh toán: </span> <br/>
                                

                                <input type="radio" name="payment" value="male"/> Thanh toán bằng tiền mặt<br/>
                                 <small>Bạn sẽ thanh toán khi nhận vé tại quầy</small> <br/>
                                    <input type="radio" name="payment" value="female" onClick = {()=> {this.useInternationCard()}}/> Thanh toán bằng thẻ quốc tế<br/>
                                    <input type="radio" name="payment" value="female"/> Thanh toán bằng thẻ nội địa<br/>
                                        <input type="radio" name="payment" value="other"/> Thanh toán bằng Momo
                                      
                                        
                            </li>
                        </ol>
                    </div>
                </Container>
                                    <Footer />
            </div>
                                );
                            }
                        }
                        
export default BookTicket;