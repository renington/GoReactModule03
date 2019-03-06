import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';

import './styles.css';

Modal.setAppElement('#root');

class AddUser extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
      cordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      ]),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { addUserRequest, modal, loading } = this.props;
    const { userInput } = this.state;

    if (loading) return;
    if (!userInput) return;

    addUserRequest(userInput, modal.cordinates);
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    const { modal, loading } = this.props;
    return (
      <div>
        <Modal
          isOpen={modal.visible}
          onRequestClose={this.handleHideModal}
          className="modal-container"
          overlayClassName="modal-overlay"
          contentLabel="Add User Modal"
        >
          <h2>Adicionar novo usuário</h2>
          <form onSubmit={this.handleFormSubmit} className="form">
            <input
              type="text"
              onChange={this.handleInputChange}
              value={userInput}
              placeholder="Usuário do Github"
            />
            <div className="buttons-container">
              <button type="button" onClick={this.handleHideModal}>
                Cancelar
              </button>
              <button type="submit">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
