import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledArticleCard,
  StyledImagePlaceholder,
} from './ArticleCard.styled';

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
    <Badge.Ribbon
      text="Standardized Testing"
      color="#d7b221"
      style={{ borderRadius: '2px' }}
    >
      <StyledArticleCard hasImage={image}>
        <Link
          className="article-image-container"
          to={{
            pathname: `/article/${id}`,
          }}
        >
          {image ? (
            <img className="article-image" src={image} />
          ) : (
            <StyledImagePlaceholder>
              <h1>jhdakjsda ajksdhja ashdkashd ajsdhkjas akshdj</h1>
            </StyledImagePlaceholder>
          )}
        </Link>

        <div className="article-body">
          <div className="article-info">
            <h4>{date}</h4>
            <h4>
              <ClockCircleOutlined /> 4 min read
            </h4>
          </div>

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
    </Badge.Ribbon>
  );
};

export default ArticleCard;
