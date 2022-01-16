import { Divider, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { StyledSectios } from './Sections.styled';
import { ArrowRightOutlined } from '@ant-design/icons';

const Sections = ({ data }) => {
  return (
    <StyledSectios>
      <h1>{data?.emoji + ' ' + data?.category}</h1>
      <p>{data?.description}</p>
      <Divider />
      <ul>
        {data.sections &&
          data.sections.map((item) => {
            return (
              <a>
                <li>
                  <ArrowRightOutlined style={{ marginRight: '10px' }} />
                  {item.section}
                </li>
              </a>
            );
          })}
      </ul>
    </StyledSectios>
  );
};

export default Sections;
