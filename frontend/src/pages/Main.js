import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import { Layout } from 'antd';
import WidthListener from '../components/WidthListener';
import {
  DESKTOP,
  MOBILE,
  SCREEN_CHANGED,
  TABLET,
} from '../redux/constants/screen.constants';
import { changeScreenMode } from '../redux/actions/screen.actions';

const { Header, Footer, Sider, Content } = Layout;

const Main = ({ mode }) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const screen_mode = useSelector((state) => state.screen.mode);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    dispatch(changeScreenMode(width));
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <Layout>
      <Header className="header-container">AKALA</Header>
      <Layout>
        {screen_mode == DESKTOP && (
          <Sider className="sider-container">Sider</Sider>
        )}
        <Content>
          <ArticleCard
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
