import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'video-react/dist/video-react.css';
import 'antd/dist/antd.less';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Wrapper from './components/shared/Wrapper';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Main from './pages/Main';
// import './styles/style.css';
import { SCREEN_CHANGED } from './redux/constants/screen.constants';
import StudentPortrait from './pages/StudentPortrait';
import { GlobalStyles } from './global';
import Header from './components/header/Header';
import { StyledLayout, Sider, Content } from './components/shared/Layout.styled';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer/Footer';
import { getCategories } from './redux/actions/nav.actions';
import Home from './pages/Home';
import Sections from './components/Sections/Sections';
import PodcastPage from './pages/PodcastPage';
const App = () => {
  const categories = useSelector((state) => state.nav.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Header categories={categories} />
      <Routes>
        <Route exact path={'/'} element={<Main data={categories} />} />
        <Route exact path={'/:category'} element={<Main data={categories} />} />
        <Route exact path={'/:category/:section'} element={<Main data={categories} />} />
        <Route exact path={'/:category/:section/article/:article_id'} element={<ArticlePage />} />
        <Route exact path={'/podcast'} element={<PodcastPage data={categories} />} />
        {/* <Route exact path={'/studentPortrait'} element={<StudentPortrait />} /> */}
        <Route exact path={'/:category/teenage-portrait'} element={<StudentPortrait />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
