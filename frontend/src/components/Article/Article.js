// credits: https://www.emgoto.com/react-table-of-contents/

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { StyledArticle } from './Article.styled';
import Headings from './Headings';
import { useIntersectionObserver, useHeadingsData } from './utils';

/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Article = () => {
  return (
    <StyledArticle>
      <div className="container">
        <main>
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
        </main>
        <TableOfContents />
      </div>
    </StyledArticle>
  );
};

export default Article;
