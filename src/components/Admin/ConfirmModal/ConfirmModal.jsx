import React, { Component } from 'react';
import './ConfirmModal.scss';
import Modal from 'react-awesome-modal';

export class ConfirmModal extends Component {
    state = {}
    render() {
        //props: closeModal, action, visible
        const { content, confirmBtn } = this.props;
        return (
            <Modal visible={this.props.visible} width="300px" height="200px" className="confirm-modal" onClickAway={() => this.props.closeModal()}>
                {/* <h4 className="confirm-modal__title">{title != null ? title : ""}</h4> */}
                <div className="confirm-modal__content">{content}</div>
                <div className="confirm-modal__btns">
                    <a name="" id="" class="btn" href="#" role="button" onClick={() => this.props.action()}>{confirmBtn}</a>
                </div>
            </Modal>
        );
    }
}