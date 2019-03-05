import React, { Fragment } from 'react';
import { Container } from './styles';

const SideBar = () => (
  <Fragment>
    <Container>
      <ul>
        <li>
          <div className="user-container">
            <img src="https://avatars3.githubusercontent.com/u/11696124?v=4" alt="avatar-github" />
            <div className="user-info">
              <strong>Victor Fernandes</strong>
              <p>victor.hmf</p>
            </div>
            <button type="button" onClick={() => {}}>
              <i className="fa fa-close" />
            </button>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
        <li>
          <div className="user-container">
            <img src="https://avatars3.githubusercontent.com/u/11696124?v=4" alt="avatar-github" />
            <div className="user-info">
              <strong>Victor Fernandes</strong>
              <p>victor.hmf</p>
            </div>
            <button type="button" onClick={() => {}}>
              <i className="fa fa-close" />
            </button>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
        <li>
          <div className="user-container">
            <img src="https://avatars3.githubusercontent.com/u/11696124?v=4" alt="avatar-github" />
            <div className="user-info">
              <strong>Victor Fernandes</strong>
              <p>victor.hmf</p>
            </div>
            <button type="button" onClick={() => {}}>
              <i className="fa fa-close" />
            </button>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
      </ul>
    </Container>
  </Fragment>
);

export default SideBar;
