import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Markup } from 'interweave';

import ArticleCard from '../components/ArticleCard/ArticleCard';
import {
  StyledLayout,
  Sider,
  Content,
} from '../components/shared/Layout.styled';
import Sections from '../components/shared/Sections';
import { getAllArticles } from '../redux/actions/article.actions';
const { TabPane } = Tabs;

const Main = () => {
  const articles = useSelector((state) => state.article.list);
  const category = useSelector((state) => state.nav.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles(category.id));
  }, [category]);

  return (
    <StyledLayout>
      <Sider>
        <Sections data={category} />
      </Sider>
      <Content>
        <Tabs defaultActiveKey="1" type="card" style={{ marginTop: '20px' }}>
          <TabPane tab="All posts" key="1">
            <h1 style={{ marginBottom: '20px' }}>
              All posts in {category.category}
            </h1>
          </TabPane>
          <TabPane tab="Latest" key="2">
            <h1 style={{ marginBottom: '20px' }}>
              Latest posts in {category.category}
            </h1>
          </TabPane>
          <TabPane tab="Most popular" key="3">
            <h1 style={{ marginBottom: '20px' }}>
              Most popular posts in {category.category}
            </h1>
          </TabPane>
        </Tabs>
        {articles &&
          articles.map((item) => {
            return <ArticleCard data={item} />;
          })}
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default Main;
