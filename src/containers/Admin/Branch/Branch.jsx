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

    CloseAddModel = () => {
        this.setState({ addBranchModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addBranchModalVisible: true });
    }

    CloseEditModel = () => {
        this.setState({ editBranchModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editBranchModalVisible: true, branchEdit: item });
    }

    CloseDeleteModal = () => {
        this.setState({ deleteBranchModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ branchDelete: item, deleteBranchModalVisible: true });
    }

    DeleteBranch = () => {
        //TODO
        console.log("delete branch");
        this.CloseDeleteModal();
    }
    SaveEditBranch = () => {
        //TODO
        console.log("save branch...");
        this.CloseEditModel();
    }
    AddNewBranch = () => {
        //TODO
        console.log("add new branch ... ");
        this.CloseAddModel();
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
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
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
                                            <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                            <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>


                    <BranchModal mode={ADD_BRANCH_MODE} visible={this.state.addBranchModalVisible} branch={null} CloseAddModel={this.CloseAddModel} AddNewBranch={this.AddNewBranch} />

                    <BranchModal mode={EDIT_BRANCH_MODE} visible={this.state.editBranchModalVisible} branch={this.state.branchEdit} CloseAddModel={this.CloseEditModel} SaveEditBranch={this.SaveEditBranch} />

                    <ConfirmModal visible={this.state.deleteBranchModalVisible} content={this.state.branchDelete !== null ? `Bạn chắc chắn muốn xóa chi nhánh  ${this.state.branchDelete.nameBranch}?` : ""} confirmBtn={"Xóa"} action={this.DeleteBranch} CloseModal={this.CloseDeleteModal} />


                </div>
            </div>);
    }
}

export default BranchAdmin;