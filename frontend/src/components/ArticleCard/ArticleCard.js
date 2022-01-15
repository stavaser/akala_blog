import React from 'react';
import { StyledArticleCard } from './ArticleCard.styled';

const ArticleCard = ({ image, title, date, body, comments, screen_mode }) => {
  return (
    <StyledArticleCard>
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
    </StyledArticleCard>
  );
};

export default ArticleCard;
