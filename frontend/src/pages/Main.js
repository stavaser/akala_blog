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
const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const truncate = (str, n = 300) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return subString.substr(0, subString.lastIndexOf(' ')) + '...';
};
const Main = () => {
  const articles = useSelector((state) => state.article.list);
  const location = useLocation();
  const category_id = location.state.category_id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllArticles(category_id));
  }, []);
  console.log(articles);
  return (
    <StyledLayout>
      <Sider>
        <Sections />
      </Sider>
      <Content>
        <Tabs defaultActiveKey="1" type="card" style={{ marginTop: '20px' }}>
          <TabPane tab="All posts" key="1">
            <h1 style={{ marginBottom: '20px' }}>
              All posts in College Admissions
            </h1>
          </TabPane>
          <TabPane tab="Latest" key="2">
            <h1 style={{ marginBottom: '20px' }}>
              Latest posts in College Admissions
            </h1>
          </TabPane>
          <TabPane tab="Most popular" key="3">
            <h1 style={{ marginBottom: '20px' }}>
              Most popular posts in College Admissions
            </h1>
          </TabPane>
        </Tabs>
        {articles &&
          articles.map((item) => {
            return (
              <ArticleCard
                id={item.id}
                image={item.image}
                title={item.title}
                date={item.str_date}
                body={<Markup content={truncate(item.text)} />}
              />
            );
          })}
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default Main;
