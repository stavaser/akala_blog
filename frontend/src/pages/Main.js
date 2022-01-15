import { Tabs } from 'antd';
import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import {
  StyledLayout,
  Sider,
  Content,
} from '../components/shared/Layout.styled';
import Sections from '../components/shared/Sections';
const { TabPane } = Tabs;

const Main = () => {
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

            <ArticleCard
              id={1}
              image={
                'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
              }
              title="Piano Lalalala"
              date="Jan 5"
              likes={5}
              comments={1}
              tags={['piano', 'music', 'notes']}
              body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
              screen_mode
            />
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

        <ArticleCard
          id={1}
          image={
            'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
          }
          title="Piano Lalalala"
          date="Jan 5"
          likes={5}
          comments={1}
          tags={['piano', 'music', 'notes']}
          body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
          screen_mode
        />
        <ArticleCard
          id={1}
          image={
            'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
          }
          title="Piano Lalalala"
          date="Jan 5"
          likes={5}
          comments={1}
          tags={['piano', 'music', 'notes']}
          body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
          screen_mode
        />
        <ArticleCard
          id={1}
          image={
            'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
          }
          title="Piano Lalalala"
          date="Jan 5"
          likes={5}
          comments={1}
          tags={['piano', 'music', 'notes']}
          body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
          screen_mode
        />
        <ArticleCard
          id={1}
          image={
            'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
          }
          title="Piano Lalalala"
          date="Jan 5"
          likes={5}
          comments={1}
          tags={['piano', 'music', 'notes']}
          body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
          screen_mode
        />
        <ArticleCard
          id={2}
          title="Piano Lalalala"
          date="Jan 5"
          likes={5}
          comments={1}
          tags={['piano', 'music', 'notes']}
          body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
          screen_mode
        />
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default Main;
