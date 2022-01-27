import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Markup } from 'interweave';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ARTICLE_INFO_REQUESTED } from '../../redux/constants/article.constants';
import { StyledArticleCard, StyledImagePlaceholder } from './ArticleCard.styled';

const truncate = (str, n = 300) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1);
  return subString.substr(0, subString.lastIndexOf(' ')) + '...';
};

const ArticleCard = ({ data }) => {
  return (
    <StyledArticleCard hasImage={data.image}>
      <Link
        className="article-image-container"
        to={{
          pathname: `../article/${data.id}`,
        }}
      >
        {
          data.image ? <img className="article-image" src={data.image} /> : null
          // <StyledImagePlaceholder>
          //   <h1>{data.title}</h1>
          // </StyledImagePlaceholder>
        }
      </Link>

      <div className="article-body">
        <div className="article-info">
          <h4>Standardized Testing / {data.str_date}</h4>
          <h4>
            <ClockCircleOutlined /> 4 min read
          </h4>
        </div>

        <h1>
          <Link
            to={{
              pathname: `../article/${data.id}`,
            }}
          >
            {data.title}
          </Link>
        </h1>
        <p>
          <Markup className="markup" content={truncate(data.text)} />
        </p>
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;
