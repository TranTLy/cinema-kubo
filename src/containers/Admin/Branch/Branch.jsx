import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import './Branch.scss';
import { MenuPanel, BranchModal, ConfirmModal } from '../../../components';
import { ADD_BRANCH_MODE, EDIT_BRANCH_MODE } from '../../../constanst';

class BranchAdmin extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            addBranchModalVisible: false,
            editBranchModalVisible: false,
            deleteBranchModalVisible: false,
            branchEdit: null,
            branchDelete: null,
        }
    }

    closeAddModel = () => {
        this.setState({ addBranchModalVisible: false })
    }
    openAddModal = () => {
        this.setState({ addBranchModalVisible: true });
    }

    closeEditModel = () => {
        this.setState({ editBranchModalVisible: false })
    }
    openEditModal = (item) => {
        console.log("item", item);
        this.setState({ editBranchModalVisible: true, branchEdit: item });
    }

    closeDeleteModal = () => {
        this.setState({ deleteBranchModalVisible: false });
    }
    openDeleteModal = (item) => {
        this.setState({ branchDelete: item, deleteBranchModalVisible: true });
    }

    deleteBranch = () => {
        //TODO
        console.log("delete branch");
    }

    render() {
        // const {branchs} = this.props;
        const branchs = [
            {
                _id: "1",
                nameBranch: "KuBo Bình Thạnh",
                address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
            },
            {
                _id: "2",
                nameBranch: "KuBo Bình Thạnh",
                address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
            }, {
                _id: "3",
                nameBranch: "KuBo Bình Thạnh",
                address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
            },
            {
                _id: "4",
                nameBranch: "KuBo Bình Thạnh",
                address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
            }
        ]
        return (
            <div className="admin branch-admin">
                <MenuPanel currentTab={1} />
                <div className="branch-admin__content">
                    <div className="branch-admin__head">
                        <div className="branch-admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="branch-admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.openAddModal()}>Thêm</a>
                        </div>
                    </div>
                    <div className="branch-admin__branchs">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên chi nhánh</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {branchs.map((item, index) => (
                                    <tr className="branch-admin__branchs--single-branch">
                                        <td>{index + 1}</td>
                                        <td>{item.nameBranch}</td>
                                        <td>{item.address}</td>
                                        <td className="actions">
                                            <i class="fas fa-edit" onClick={() => this.openEditModal(item)}></i>
                                            <i class="fas fa-trash-alt" onClick={() => this.openDeleteModal(item)}></i></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>


                    <BranchModal mode={ADD_BRANCH_MODE} visible={this.state.addBranchModalVisible} branch={null} closeAddModel={this.closeAddModel} />

                    <BranchModal mode={EDIT_BRANCH_MODE} visible={this.state.editBranchModalVisible} branch={this.state.branchEdit} closeAddModel={this.closeEditModel} />

                    <ConfirmModal visible={this.state.deleteBranchModalVisible} content={this.state.branchDelete !== null ? `Bạn chắc chắn muốn xóa chi nhánh  ${this.state.branchDelete.nameBranch}?` : ""} confirmBtn={"Xóa"} action={this.deleteBranch} closeModal={this.closeDeleteModal} />


                </div>
            </div>);
    }
}

export default BranchAdmin;