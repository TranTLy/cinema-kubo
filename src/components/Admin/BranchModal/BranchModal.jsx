import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './BranchModal.scss';
import { ADD_BRANCH_MODE, EDIT_BRANCH_MODE } from '../../../constanst'

export class BranchModal extends Component {
    state = {}
    render() {
        const { mode, branch, visible } = this.props;
        console.log("branch: ", branch);
        return (
            <Modal visible={visible} className="branch-modal" width="600" height="400" effect="fadeInUp" onClickAway={() => this.props.closeAddModel()}>
                <div className="branch-modal__title">
                    {mode === ADD_BRANCH_MODE && (<h1>Thêm chi nhánh</h1>)}
                    {mode !== ADD_BRANCH_MODE && (<h1>Thông tin chi nhánh</h1>)}
                </div>
                <div className="branch-modal__table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="lable">Tên:</td>
                                <td><input type="text" placeholder={branch !== null ? branch.nameBranch : ""} /></td>
                            </tr>
                            <tr>
                                <td className="lable">Địa chỉ:</td>
                                <td><input type="text" placeholder={branch !== null ? branch.address : ""} /></td>
                            </tr>
                            {mode !== ADD_BRANCH_MODE && branch != null && (
                                <tr>
                                    <td className="lable">Số lượng phòng chiếu:</td>
                                    <td><input type="text" placeholder={branch !== null ? branch.numberRoom : ""} /></td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </Modal>
        );
    }
}
