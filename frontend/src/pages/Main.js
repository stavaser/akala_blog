import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Markup } from 'interweave';

import ArticleCard from '../components/ArticleCard/ArticleCard';
import { StyledLayout, Sider, Content } from '../components/shared/Layout.styled';
import Sections from '../components/Sections/Sections';
import { getAllArticles } from '../redux/actions/article.actions';
import Banner from '../components/Banner/Banner';
const { TabPane } = Tabs;

const Main = ({ data }) => {
  const slug = useParams();
  const { state } = useLocation();
  const { hash } = useLocation();
  const articles = useSelector((state) => state.article.list);
  const category = useSelector((state) => state.nav.category);
  const dispatch = useDispatch();

  console.log(slug, state, hash);

  useEffect(() => {
    dispatch(getAllArticles(slug?.category, slug?.section));
  }, [slug]);
  console.log(articles);
  return (
    <React.Fragment>
      <StyledLayout>
        <Sider>
          <Sections data={data} />
        </Sider>
        <Content>
          <Banner title={category.category} />

          {articles &&
            articles.map((item) => {
              return <ArticleCard data={item} />;
            })}
        </Content>
        <Sider />
      </StyledLayout>
    </React.Fragment>
  );
};

export default Main;
