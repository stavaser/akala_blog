import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import { StyledBanner } from '../components/shared/Banner.styled';
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
      <Content>
        <StyledBanner>
          {/* <img src="https://goakala.files.wordpress.com/2020/12/cropped-akala-black.jpeg" /> */}
          <p>
            We are AKALA, an AI-enabled College Admissions Counseling platform
            that helps students navigate the complicated journey to college. Our
            mission: To give every student, regardless of background, access to
            high-quality college admissions guidance. Also, learn about our work
            throughout the country in the under-resourced communities. Check out
            our website: http://www.EquityInAccess.org Watch our video!
          </p>
          <h1>Most Recent Posts:</h1>
          {articles &&
            articles.map((item) => {
              return <ArticleCard data={item} />;
            })}
        </StyledBanner>
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default Home;
