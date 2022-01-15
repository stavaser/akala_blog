import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import {
  StyledLayout,
  Sider,
  Content,
} from '../components/shared/Layout.styled';

const Main = () => {
  return (
    <StyledLayout>
      <Sider />
      <Content>
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
