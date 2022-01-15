import React from 'react';
import { StyledArticle } from './Article.styled';
const Article = ({ image, title, date, body, comments, screen_mode }) => {
  return (
    <StyledArticle>
      <a className="article-image-container">
        {image ? <img className="article-image" src={image} /> : null}
      </a>
      <div className="article-body">
        <h4>{date}</h4>
        <h1>
          <a>{title}</a>
        </h1>
        <p>{body}</p>
      </div>
    </StyledArticle>
  );
};

export default Article;
