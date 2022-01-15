import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.less';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Wrapper from './components/shared/Wrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
// import './styles/style.css';
import { SCREEN_CHANGED } from './redux/constants/screen.constants';
import StudentPortrait from './pages/StudentPortrait';
import { GlobalStyles } from './global';
import Header from './components/header/Header';
import {
  StyledLayout,
  Sider,
  Content,
} from './components/shared/Layout.styled';
const App = () => {
  return (
    <div>
      <Header />
      <StyledLayout>
        <Sider>s</Sider>
        <Content>
          <Routes>
            <Route exact path={'/'} element={<Main />} />
            <Route exact path={'/studentPortrait'} element={StudentPortrait} />
          </Routes>
        </Content>
        <Sider>s</Sider>
      </StyledLayout>
    </div>
  );
};

export default App;
