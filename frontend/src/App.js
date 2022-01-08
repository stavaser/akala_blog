import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './styles/style.css';
import { SCREEN_CHANGED } from './redux/constants/screen.constants';
import StudentPortrait from './pages/StudentPortrait';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Main />} />
          <Route
            exact
            path={'/studentPortrait'}
            element={<StudentPortrait />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
