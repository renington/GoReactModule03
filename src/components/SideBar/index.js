import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';
import { Container } from './styles';

const SideBar = ({ users, removeUser }) => (
  <Fragment>
    <Container>
      <ul>
        {users.data.map(user => (
          <li key={user.id}>
            <div className="user-container">
              <img src={user.avatar} alt="avatar-github" />
              <div className="user-info">
                <strong>{user.name}</strong>
                <p>{user.login}</p>
              </div>
              <button type="button" onClick={() => removeUser(user)}>
                <i className="fa fa-close" />
              </button>
              <a href={`http://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-fw fa-angle-right go-to-page" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </Fragment>
);

SideBar.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        login: PropTypes.string,
        cordinates: PropTypes.shape({
          latitude: PropTypes.string,
          longitude: PropTypes.string,
        }),
      }),
    ),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(SideBar);
