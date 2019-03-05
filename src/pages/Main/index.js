import React, { Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import Map from '../../components/Map';
import SideBar from '../../components/SideBar';
import UserModal from '../../components/AddUser';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
    <SideBar />
    <UserModal />
  </Fragment>
);

export default Main;
