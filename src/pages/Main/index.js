import React, { Fragment } from 'react';
import GlobalStyle from '../../styles/global';
import Map from '../../components/Map';
import SideBar from '../../components/SideBar';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
    <SideBar />
  </Fragment>
);

export default Main;
