import React, { Component } from 'react';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import Modal from 'react-awesome-modal';
import './CinemaModal.scss'


export class CinemaModal extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            cinema: null
        }
    }

    // componentDidMount() {
    //     console.log("cinema didmount: ", this.props.cinema);
    //     this.setState({ cinema: this.props.cinema });
    // }

    getInfor = (mode) => {
        // const newCinema = {
        //     name: document.getElementById("modal-name").value,
        //     description: document.getElementById("modal-description").value,
        //     startDate: document.getElementById("modal-startDate").value,
        //     director: document.getElementById("modal-director").value,
        //     actors: document.getElementById("modal-actors").value,
        //     language: document.getElementById("modal-language").value,
        //     age: document.getElementById("modal-age").value,
        //     price: document.getElementById("modal-price").value,
        //     point: document.getElementById("modal-point").value,
        //     rate: document.getElementById("modal-rate").value
        // }

        const newCinema = {
            name: this.state.cinema.name || this.props.cinema.name,
            description: this.state.cinema.description || this.props.cinema.description,
            startDate: this.state.cinema.startDate || this.props.cinema.startDate,
            director: this.state.cinema.director || this.props.cinema.director,
            actors: this.state.cinema.actors || this.props.cinema.actors,
            language: this.state.cinema.language || this.props.cinema.language,
            actors: this.state.cinema.actors || this.props.cinema.actors,
            age: this.state.cinema.age || this.props.cinema.age,
            price: this.state.cinema.actors || this.props.cinema.price,
            point: this.state.cinema.actors || this.props.cinema.point,
            rate: this.state.cinema.actors || this.props.cinema.rate
        }
        console.log("film save: ", newCinema);
        if (mode === EDIT_MODE) {
            this.props.SaveEditCinema(newCinema);
        } else {
            this.props.AddNewCinema(newCinema);
        }
    }

    onChangeName = (e) => {
        this.setState({ cinema: { name: e.target.value } })
    }
    description = (e) => {
        this.setState({ cinema: { description: e.target.value } })
    }
    startDate = (e) => {
        this.setState({ cinema: { startDate: e.target.value } })
    }
    director = (e) => {
        this.setState({ cinema: { director: e.target.value } })
    }
    actors = (e) => {
        this.setState({ cinema: { actors: e.target.value } })
    }
    language = (e) => {
        this.setState({ cinema: { language: e.target.value } })
    }
    age = (e) => {
        this.setState({ cinema: { age: e.target.value } })
    }
    price = (e) => {
        this.setState({ cinema: { price: e.target.value } })
    }
    point = (e) => {
        this.setState({ cinema: { point: e.target.value } })
    }
    rate = (e) => {
        this.setState({ cinema: { rate: e.target.value } })
    }

    render() {
        const { visible, cinema, mode } = this.props;
        return (
            <Modal visible={visible} width="600" height="600" effect="fadeInUp" onClickAway={() => this.props.CloseAddModel()}>
                <div className="cinema-modal">
                    <div className="cinema-modal__title">
                        {mode === ADD_MODE && (<h4>Thêm phim</h4>)}
                        {mode !== ADD_MODE && (<h4> Thông tin chi tiết phim</h4>)}
                    </div>
                    <div className="cinema-modal__table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="lable required-lable">Tên phim:</td>
                                    <td><input onChange={this.onChangeName} id="modal-name" clasName="required" type="text" placeholder={cinema !== null ? cinema.name : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Mô tả:</td>
                                    <td>
                                        <textarea id="modal-description" cols="30" rows="3" placeholder={cinema !== null ? cinema.description : ""}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Ngày khởi chiếu:</td>
                                    <td><input id="modal-startDate" clasName="required" type="text" placeholder={cinema !== null ? new Date(cinema.releaseDate).toLocaleDateString('en-GB') : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Thời lượng:</td>
                                    <td><input id="modal-duration" clasName="required" type="text" placeholder={cinema !== null ? cinema.duration : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Đạo diễn:</td>
                                    <td><input id="modal-director" clasName="required" type="text" placeholder={cinema !== null ? cinema.director : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Diễn viên:</td>
                                    <td>
                                        <input id="modal-actors" type="text" placeholder={cinema !== null ? cinema.actors : ""} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable">Ngôn ngữ:</td>
                                    <td><input id="modal-language" type="text" placeholder={cinema !== null ? cinema.language : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Độ tuổi tối thiểu:</td>
                                    <td><input id="modal-age" type="text" placeholder={cinema !== null ? cinema.age : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Giá vé:</td>
                                    <td><input id="modal-price" clasName="required" type="number" placeholder={cinema !== null ? (cinema.price / 1000.0).toFixed(3) : ""} /></td>
                                </tr>
                                {mode !== ADD_MODE && cinema != null && (
                                    <tr>
                                        <td className="lable">Tình trạng:</td>
                                        <td><input name="status" type="text" value={cinema.status === true ? "Đang/ sắp chiếu" : "Ngừng chiếu"} /></td>
                                    </tr>)}
                                <tr>
                                    <td className="lable">Điểm tích lũy cho thành viên:</td>
                                    <td><input id="modal-point" type="number" placeholder={cinema !== null ? cinema.point : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Điểm đánh giá:</td>
                                    <td><input id="modal-rate" type="number" placeholder={cinema !== null ? cinema.rate : ""} /></td>
                                </tr>
                                {
                                    mode === ADD_MODE && (
                                        <tr>
                                            <td className="lable required-lable">Hình ảnh:</td>
                                            <td><input name="img" type="file" clasName="required" /></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cinema-modal__btns">
                        <a className="btn" role="button" onClick={mode === ADD_MODE ? () => this.getInfor(ADD_MODE) : () => this.getInfor(EDIT_MODE)}> <i class="far fa-save"></i> Lưu</a>
                        <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                    </div>

                </div>
            </Modal >
        );
    }
}