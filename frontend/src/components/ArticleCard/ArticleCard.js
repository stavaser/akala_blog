import React from 'react';
import { Link } from 'react-router-dom';
import { StyledArticleCard } from './ArticleCard.styled';

const ArticleCard = ({
  id,
  image,
  title,
  date,
  body,
  comments,
  screen_mode,
}) => {
  return (
    <StyledArticleCard>
      <a className="article-image-container">
        {image ? <img className="article-image" src={image} /> : null}
      </a>
      <div className="article-body">
        <h4>{date}</h4>
        <h1>
          <Link
            to={{
              pathname: `/article/${id}`,
            }}
          >
            {title}
          </Link>
        </h1>
        <p>{body}</p>
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;
