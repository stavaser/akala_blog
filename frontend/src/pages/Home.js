import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Banner from '../components/Banner/Banner';
import {
  Content,
  Sider,
  StyledLayout,
} from '../components/shared/Layout.styled';
import Sections from '../components/shared/Sections';
import SiderMenu from '../components/shared/SiderMenu';
import { getAllArticles } from '../redux/actions/article.actions';

const Home = ({ data }) => {
  const articles = useSelector((state) => state.article.list);
  const category = useSelector((state) => state.nav.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles(category.id));
  }, [category]);

  return (
    <StyledLayout>
      <Sider>
        <Sections data={data} />
      </Sider>
      <Content></Content>
      <Sider />
    </StyledLayout>
  );
};

export default Home;
