import React, { Component } from 'react';
import './CinemaAdmin.scss';
import { MenuPanel, ConfirmModal, CinemaModal } from '../../../components';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';


class CinemaAdmin extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            addCinemaModalVisible: false,
            editCinemaModalVisible: false,
            deleteCinemaModalVisible: false,
            cinemaEdit: null,
            cinemaDelete: null,
        }
    }

    CloseAddModal = () => {
        this.setState({ addCinemaModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addCinemaModalVisible: true });
    }

    CloseEditModal = () => {
        this.setState({ editCinemaModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editCinemaModalVisible: true, cinemaEdit: item });
    }
    CloseDeleteModal = () => {
        this.setState({ deleteCinemaModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ cinemaDelete: item, deleteCinemaModalVisible: true });
    }
    DeleteCinema = () => {
        //TODO
        console.log("delete cinema");
        this.CloseDeleteModal();
    }
    SaveEditCinema = () => {
        //TODO
        console.log("save cinema...");
        this.CloseEditModal();
    }
    AddNewCinema = () => {
        //TODO
        console.log("add new cinema ... ");
        this.CloseAddModal();
    }

    render() {
        // const {cinemas} = this.props;
        const cinemas = [
            {
                _id: "1",
                name: "Bí kíp luyện rồng",
                description: "Một bộ phim phiêu lưu kinh điển. Đáng xem trong dịp hè này",
                type: 1,
                startDate: "2019/01/30",
                duration: 60,
                director: "ABC",
                actor: "actors",
                language: "Tiếng Anh",
                minAge: 0,
                priceTicket: "60000",
                status: 1, //(0: Đã hết hạn, 1: Còn đang chiếu)
                score: 1,
                rating: 4.2
            },
            {
                _id: "1",
                name: "Bí kíp luyện rồng",
                description: "Một bộ phim phiêu lưu kinh điển. Đáng xem trong dịp hè này",
                type: 1,
                startDate: "2019/01/30",
                duration: 60,
                director: "ABC",
                actor: "actors",
                language: "Tiếng Anh",
                minAge: 0,
                priceTicket: "60000",
                status: 1, //(0: Đã hết hạn, 1: Còn đang chiếu)
                score: 1,
                rating: 4.2
            },
            {
                _id: "1",
                name: "Bí kíp luyện rồng",
                description: "Một bộ phim phiêu lưu kinh điển. Đáng xem trong dịp hè này",
                type: 1,
                startDate: "2019/01/30",
                duration: 60,
                director: "ABC",
                actor: "actors",
                language: "Tiếng Anh",
                minAge: 0,
                priceTicket: "60000",
                status: 1, //(0: Đã hết hạn, 1: Còn đang chiếu)
                score: 1,
                rating: 4.2
            }
        ]
        return (
            <React.Fragment>
                <div className="cinemas-admin admin__content">
                    <div className="cinemas-admin__head admin__head">
                        <div className="cinemas-admin__head--find admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="cinemas-admin__head--add admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
                        </div>
                    </div>
                    <div className="cinema-admin__cinemas admin__detail">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên phim</th>
                                    <th scope="col">Thời lượng</th>
                                    <th scope="col">Tình trạng</th>
                                    {/* th: actor */}
                                </tr>
                            </thead>
                            <tbody>
                                {cinemas.map((item, index) => (
                                    <tr className="cinemas-admin__cinemas--single-cinema admin__detail--single">
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.duration}</td>
                                        <td className="actions">
                                            <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                            <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>


                    <CinemaModal mode={ADD_MODE} visible={this.state.addCinemaModalVisible} CloseAddModel={this.CloseAddModal} cinema={null}
                        AddNewCinema={this.AddNewCinema} />

                    <CinemaModal mode={EDIT_MODE} visible={this.state.editCinemaModalVisible} CloseAddModel={this.CloseEditModal} cinema={this.state.cinemaEdit}
                        SaveEditCinema={this.SaveEditCinema} />

                    <ConfirmModal visible={this.state.deleteCinemaModalVisible} confirmBtn="Xóa" content={this.state.cinemaDelete != null ? `Bạn có chắc chắn muốn xóa phim ${this.state.cinemaDelete.name}?` : ""}
                        action={this.DeleteCinema} CloseModal={this.CloseDeleteModal} />

                </div>
            </React.Fragment>
        );
    }
}

export default CinemaAdmin;