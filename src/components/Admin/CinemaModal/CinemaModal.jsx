import React, { Component } from 'react';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import Modal from 'react-awesome-modal';
import './CinemaModal.scss'


export class CinemaModal extends Component {
    state = {}
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
                                    <td><input name="name" clasName="required" type="text" placeholder={cinema !== null ? cinema.name : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Mô tả:</td>
                                    <td>
                                        <textarea name="description" id="desciprion" cols="30" rows="3" placeholder={cinema !== null ? cinema.desciption : ""}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Ngày khởi chiếu:</td>
                                    <td><input name="startDate" clasName="required" type="text" placeholder={cinema !== null ? cinema.startDate : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Thời lượng:</td>
                                    <td><input name="duration" clasName="required" type="text" placeholder={cinema !== null ? cinema.duration : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Đạo diễn:</td>
                                    <td><input name="director" clasName="required" type="text" placeholder={cinema !== null ? cinema.director : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Diễn viên:</td>
                                    <td><input name="actor" type="text" placeholder={cinema !== null ? cinema.actor : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Ngôn ngữ:</td>
                                    <td><input name="language" type="text" placeholder={cinema !== null ? cinema.language : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Độ tuổi tối thiểu:</td>
                                    <td><input name="minAge" type="text" placeholder={cinema !== null ? cinema.minAge : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Giá vé:</td>
                                    <td><input name="priceTicket" clasName="required" type="number" placeholder={cinema !== null ? cinema.priceTicket : ""} /></td>
                                </tr>
                                {mode !== ADD_MODE && cinema != null && (
                                    <tr>
                                        <td className="lable">Tình trạng:</td>
                                        <td><input name="status" type="text" placeholder={cinema.status === 1 ? "Đang/ sắp chiếu" : "Ngừng chiếu"} /></td>
                                    </tr>)}
                                <tr>
                                    <td className="lable">Điểm tích lũy cho thành viên:</td>
                                    <td><input name="score" type="number" placeholder={cinema !== null ? cinema.score : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Điểm đánh giá:</td>
                                    <td><input name="rating" type="number" placeholder={cinema !== null ? cinema.rating : ""} /></td>
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
                        <a className="btn" role="button" onClick={mode === ADD_MODE ? () => this.props.AddNewCinema() : () => this.props.SaveEditCinema()}> <i class="far fa-save"></i> Lưu</a>
                        <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                    </div>

                </div>
            </Modal >
        );
    }
}