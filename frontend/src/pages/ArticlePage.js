// credits: https://www.emgoto.com/react-table-of-contents/

import { Timeline, Steps, Divider } from 'antd';
import { Markup } from 'interweave';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { StyledArticle, StyledNav } from '../components/Article/Article.styled';
import Headings from '../components/Article/Headings';
import {
  useIntersectionObserver,
  useHeadingsData,
} from '../components/Article/utils';
import ContentsTable from '../components/ContentsTable/ContentsTable';
import {
  StyledLayout,
  Sider,
  Content,
} from '../components/shared/Layout.styled';

const { Step } = Steps;

/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  // return <Headings headings={nestedHeadings} activeId={activeId} />;
  return <ContentsTable headings={nestedHeadings} activeId={activeId} />;
};
// console.log()
const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const ArticlePage = () => {
  const article = useSelector((state) => state.article.info);

  // const params = useParams();
  // const article_id = params.id - 1;
  // const data = articles[article_id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledLayout>
      <Sider article>
        <StyledNav>
          <TableOfContents />
        </StyledNav>
      </Sider>
      <Content article>
        <StyledArticle>
          <div className="container">
            <main>
              <img
                src={
                  article.image
                    ? article.image
                    : `https://picsum.photos/800/300/?random`
                }
              />
              <div className="content">
                <h1>{article.title}</h1>

                {/* <h2 title="big" id={0}>
                  big
                </h2>
                <h2 title="Initial header" id={1}>
                  Initial header
                </h2>
                <h2 title="Second header" id={2}>
                  Second header
                </h2>
                <h3 title="Third header" id={3}>
                  Third header
                </h3>

                <h2 title="Fourth header" id={4}>
                  Fourth header
                </h2>

                <h3 title="Fifth header" id={5}>
                  Fifth header
                </h3> */}
                <Markup content={article.text} />
              </div>
            </main>
          </div>
        </StyledArticle>
      </Content>
      <Sider />
    </StyledLayout>
  );
};

export default ArticlePage;
