import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleCard from '../components/ArticleCard/ArticleCard';
import { StyledLayout, Sider, Content } from '../components/shared/Layout.styled';
import Sections from '../components/Sections/Sections';
import { getAllArticles, getAllPodcasts } from '../redux/actions/article.actions';
import Banner from '../components/Banner/Banner';
import PodcastPlayer from '../components/PodcastPlayer/PodcastPlayer';
import { PodcastContainer } from '../components/PodcastPlayer/PodcastPlayer.styled';

const PodcastPage = ({ data }) => {
  const slug = useParams();
  const podcasts = useSelector((state) => state.article.podcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPodcasts());
  }, [slug]);
  console.log(podcasts);
  return (
    <React.Fragment>
      <StyledLayout>
        <Sider>
          <Sections data={data} />
        </Sider>
        <Content>
          <PodcastContainer>
            {podcasts &&
              podcasts.map((item) => {
                return <PodcastPlayer data={item} />;
              })}
          </PodcastContainer>
        </Content>
        <Sider />
      </StyledLayout>
    </React.Fragment>
  );
};

export default PodcastPage;
