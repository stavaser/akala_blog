import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleCard from '../components/ArticleCard/ArticleCard';
import { StyledLayout, Sider, Content } from '../components/shared/Layout.styled';
import Sections from '../components/Sections/Sections';
import { getAllArticles, getAllSchoolVideos } from '../redux/actions/article.actions';
import Banner from '../components/Banner/Banner';
import VideoCard from '../components/VideoCard/VideoCard';
import VideoSubmitForm from '../components/VideoCard/VideoSubmitForm';

const WhySchoolPage = ({ data }) => {
  const slug = useParams();
  const schools = useSelector((state) => state.article.schools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSchoolVideos());
  }, [slug]);
  console.log(schools);
  return (
    <React.Fragment>
      <StyledLayout>
        <Sider>
          <Sections data={data} />
        </Sider>
        <Content>
          {schools &&
            schools.map((item) => {
              return <VideoCard data={item} />;
            })}
        </Content>
        <Sider>
          <VideoSubmitForm />
        </Sider>
      </StyledLayout>
    </React.Fragment>
  );
};

export default WhySchoolPage;
