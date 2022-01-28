import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleCard from '../components/ArticleCard/ArticleCard';
import { StyledLayout, Sider, Content } from '../components/shared/Layout.styled';
import Sections from '../components/Sections/Sections';
import { getAllArticles } from '../redux/actions/article.actions';
import Banner from '../components/Banner/Banner';
import PodcastPlayer from '../components/PodcastPlayer/PodcastPlayer';
import { PodcastContainer } from '../components/PodcastPlayer/PodcastPlayer.styled';

const PodcastPage = ({ data }) => {
  const slug = useParams();
  const article = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles(slug?.category, slug?.section));
  }, [slug]);
  console.log(article);
  return (
    <React.Fragment>
      <StyledLayout>
        <Sider>
          <Sections data={data} />
        </Sider>
        <Content>
          <PodcastContainer>
            <PodcastPlayer />
            <PodcastPlayer />
            <PodcastPlayer />
            <PodcastPlayer />
          </PodcastContainer>
        </Content>
        <Sider />
      </StyledLayout>
    </React.Fragment>
  );
};

export default PodcastPage;
