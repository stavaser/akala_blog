import { Divider, Tabs } from 'antd';
import React from 'react';
import { StyledSectios } from './Sections.styled';
import { ArrowRightOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const items = [
  'spotlight schools',
  'community service',
  'articles',
  'standardized testing',
];
const Sections = () => {
  return (
    <StyledSectios>
      <h1>College Admissions</h1>
      <p>
        Check out the most-read and most-shared posts from the GOAKALA blog!
      </p>
      <Divider />
      {/* <h3>Categories:</h3> */}
      <ul>
        {items.map((item) => {
          return (
            <a>
              <li>
                <ArrowRightOutlined style={{ marginRight: '10px' }} />
                {item}
              </li>
            </a>
          );
        })}
      </ul>
    </StyledSectios>
  );
};

export default Sections;
