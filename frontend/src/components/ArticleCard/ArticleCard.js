import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Markup } from 'interweave';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  StyledArticleCard,
  StyledImagePlaceholder,
} from './ArticleCard.styled';

const truncate = (str, n = 300) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1);
  return subString.substr(0, subString.lastIndexOf(' ')) + '...';
};

const ArticleCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Badge.Ribbon
      text="Standardized Testing"
      color="#d7b221"
      style={{ borderRadius: '2px' }}
    >
      <StyledArticleCard hasImage={data.image}>
        <Link
          className="article-image-container"
          to={{
            pathname: `/article/${data.id}`,
          }}
        >
          {data.image ? (
            <img className="article-image" src={data.image} />
          ) : (
            <StyledImagePlaceholder>
              <h1>jhdakjsda ajksdhja ashdkashd ajsdhkjas akshdj</h1>
            </StyledImagePlaceholder>
          )}
        </Link>

        <div className="article-body">
          <div className="article-info">
            <h4>{data.str_date}</h4>
            <h4>
              <ClockCircleOutlined /> 4 min read
            </h4>
          </div>

          <h1>
            <Link
              to={{
                pathname: `/article/${data.id}`,
              }}
            >
              {data.title}
            </Link>
          </h1>
          <p>
            <Markup content={truncate(data.text)} />
          </p>
        </div>
      </StyledArticleCard>
    </Badge.Ribbon>
  );
};

export default ArticleCard;
