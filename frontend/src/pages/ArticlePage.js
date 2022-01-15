// credits: https://www.emgoto.com/react-table-of-contents/

import { Timeline, Steps, Divider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
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

  return (
    <nav aria-label="Table of contents">
      <h1>Table of contents:</h1>

      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const ArticlePage = () => {
  return (
    <StyledLayout>
      <Sider article>
        <StyledNav>
          <ContentsTable />
          {/* <TableOfContents /> */}
        </StyledNav>
      </Sider>
      <Content article>
        <StyledArticle>
          <div className="container">
            <main>
              <img src={`https://picsum.photos/800/300/?random`} />
              <div className="content">
                <h1>What role do subject tests play? NONE!</h1>

                <h2 id="big">big</h2>
                <p>{DummyText}</p>
                <h2 id="initial-header">Initial header</h2>
                <p>{DummyText}</p>
                <h2 id="second-header">Second header</h2>
                <p>{DummyText}</p>
                <h3 id="third-header">Third header</h3>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <h2 id="fourth-header">Fourth header</h2>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <h3 id="fifth-header">Fifth header</h3>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
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
