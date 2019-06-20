import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Button } from 'reactstrap';
import { ProgressBookTicket, SeatingPlant, Bill } from '../../../components'

import './BookTicket.scss'
class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            STEP_ONE: 1,
            STEP_TWO: 2,
            STEP_THREE: 3,
            steps: [
                {
                    step: 1,
                    name: "Chọn số lượng vé"
                }, {
                    step: 2,
                    name: "Chọn ghế ngồi"
                }, {
                    step: 3,
                    name: "Thanh toán"
                }
            ],
            currentStep: 1,
            numberTicket: 0,
            arrayPositionSeat: [] //an array that records the position of seat
        }
    }

    selectSeatPosition = (pos) => {
        this.setState({ arrayPositionSeat: [...this.state.arrayPositionSeat, pos] })
        // console.log("arr pos seat:", this.state.arrayPositionSeat);
        // console.log("old number ticket: ", this.state.numberTicket);
        // console.log("posi:", pos);
        // console.log("new number ticket: ", this.state.numberTicket);
    }

    deselectSeatPosition = (pos) => {
        this.setState({ arrayPositionSeat: [...this.state.arrayPositionSeat.filter(item => item != pos)] });
        console.log("arr pos seat:", this.state.arrayPositionSeat);

    }

    nextStep = () => {
        const currentStep = this.state.currentStep;
        console.log("first curr step: ", currentStep);
        if (currentStep === this.state.STEP_THREE) {
            //TODO
            //payment
        }
        else {
            if (currentStep == this.state.STEP_TWO) {
                const btnNext = document.getElementById("btn--next");
                btnNext.innerHTML = "Thanh toán";
            }
            this.setState({ currentStep: currentStep + 1 });
        }

    }
    backStep = () => {
        const currentStep = this.state.currentStep;

        if (currentStep != this.state.STEP_ONE) {
            this.setState({ currentStep: currentStep - 1 });

            const btnNext = document.getElementById("btn--next");
            if (btnNext != null) {
                btnNext.innerHTML = "Tiếp theo"
            }
        }
    }

    onChangNumberTicket = () => {
        const inputNumberTicket = document.getElementById("number-ticket");
        if (inputNumberTicket.value <= 0) {
            inputNumberTicket.value = 1;
        }
        this.setState({ numberTicket: inputNumberTicket.value });
    }

    renderOption = (stateSeat) => {
        switch (this.state.currentStep) {
            case this.state.STEP_ONE:
                return (
                    <div className="option__detail -number-ticket">
                        <span className="number">Số lượng vé: </span>
                        <input type="number" name="number" id="number-ticket" onChange={() => { this.onChangNumberTicket() }} /> <br />
                    </div>

                )
            case this.state.STEP_TWO:

                return (
                    <div class="option__detail">
                        <SeatingPlant stateSeat={stateSeat} maxSeat={this.state.numberTicket}
                            selectSeatPosition={this.selectSeatPosition} deselectSeatPosition={this.deselectSeatPosition} />
                    </div>
                )
            case this.state.STEP_THREE:
                return (
                    <div className="option__detail">
                        <div className="detail__lable">Vui lòng chọn hình thức thanh toán</div>
                        <div className="detail__payment">
                            <input type="radio" name="typePayment" id="" autocomplete="off" checked value="cash" />Thanh toán bằng tiền mặt<br></br>
                            <input type="radio" name="typePayment" id="" autocomplete="off" value="card" />Thanh toán bằng thẻ nội địa<br></br>
                            <input type="radio" name="typePayment" id="" autocomplete="off" value="internationCart" />Thanh toán bằng thẻ quốc tế<br></br>
                        </div>
                    </div>
                )
            default:
                return (<div>

                </div>);
        }
    }
    render() {
        const branch =
        {
            id: 1,
            nameBranch: "Kubo Vạn Hanh",
            address: "111, Sư Vạn Hạnh, Q.10, TP. Hồ Chí Minh"
        };
        const promotion = {
            namePromotion: "Ưu đãi mùa hè cùng Kubo",
            discount: 0.3
        }
        const schedule = {
            idBranch: 1,
            idCinema: 1,
            startTime: "09:00 12/05/2019",
            idRoom: 1,
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
            score: 1,
            isActive: true,
            rate: 4.5,
            img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_8-1-196x336.jpg"
        };
        const SeatingRoomSchedule = {
            stateSeat: "0001000000000000000000000000000000000000000000001110000000000000000000011000000000000000000000000100"
        }
        return (
            <div>
                <Header />
                <Container className="book-ticket-wrap">
                    <div className="schedule">
                        <CardItemDetail movie={myMovie} />
                        <div className="detail-schedule">
                            <div className="title"><div> <i class="fas fa-film"></i> Lịch chiếu</div></div>
                            <div><span className="lable">Chi nhánh: </span>{branch.nameBranch}</div>
                            <div><span className="lable">Địa chỉ: </span>{branch.address}</div>
                            <div><span className="lable">Thời gian bắt đầu: </span>{schedule.startTime}</div>
                            <div><span className="lable">Phòng: </span>{schedule.idRoom}</div>
                            <div><span className="lable">Số vé còn: </span>{schedule.availableTicket} vé/ tổng {schedule.sumTicket} vé</div>
                        </div>
                    </div>
                    <div className="book-ticket-option">
                        <div className="title"><span>ĐẶT VÉ</span></div>
                        <ProgressBookTicket currentStep={this.state.currentStep} steps={this.state.steps} />
                        <div className="btns">
                            <button id="btn--back" onClick={() => { this.backStep() }}>Trở về</button>
                            <button id="btn--next" onClick={() => { this.nextStep() }}>Tiếp theo</button>
                        </div>
                        <div className="option">
                            {
                                this.renderOption(SeatingRoomSchedule.stateSeat)
                            }
                        </div>
                        <div className="bill">
                            <Bill price={myMovie.price} numberTicket={this.state.numberTicket} discount={promotion.discount} namePromotion={promotion.namePromotion} />
                        </div>

                    </div>
                </Container>
                <Footer />

            </div>
        );
    }
}

export default BookTicket;