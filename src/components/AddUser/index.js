import React, { Component } from 'react';
import Modal from 'react-modal';

import './styles.css';

Modal.setAppElement('#root');

export default class AddUser extends Component {
  state = {
    modalIsOpen: true,
    userInput: '',
  };

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modal-container"
          overlayClassName="modal-overlay"
          contentLabel="Add User Modal"
        >
          <h2>Adicionar novo usuário</h2>
          <form className="form">
            <input
              type="text"
              onChange={this.handleInputChange}
              value={userInput}
              placeholder="Usuário do Github"
            />
            <div className="buttons-container">
              <button type="button" onClick={() => {}}>
                Cancelar
              </button>
              <button type="submit" onClick={this.openModal}>
                Salvar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
