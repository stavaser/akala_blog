import { Divider, Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyledSectios } from './Sections.styled';
import { ArrowRightOutlined } from '@ant-design/icons';
import { CATEGORY_CHANGED, SECTION_CHANGED } from '../../redux/constants/nav.constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import slugify from 'slugify';
import { Link, NavLink } from 'react-router-dom';
const { Panel } = Collapse;

const Sections = ({ data }) => {
  return (
    <StyledSectios>
      <Collapse ghost accordion defaultActiveKey={1}>
        {data &&
          data.map((category) => {
            return (
              <Panel
                header={
                  <>
                    <NavLink
                      className="category"
                      // className={category.order == 1 ? 'active category' : 'category'}
                      to={'/' + slugify(category.category)}
                      state={{ category_id: category.id }}
                    >
                      {category.emoji + ' ' + category.category}
                      <svg
                        className="stroke"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 152.9 43.4"
                        style={{ enableBackground: 'new 0 0 152.9 43.4' }}
                        xmlSpace="preserve"
                      >
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
                      </svg>
                    </NavLink>
                  </>
                }
                key={category.order}
              >
                <p>{category.description}</p>
                <Divider />
                {category.sections &&
                  category.sections.map((item) => {
                    return (
                      <NavLink
                        className="section"
                        to={{
                          hash: slugify(item.section),
                        }}
                        state={{ category_id: category.id, section_id: item.id }}
                      >
                        <li>
                          <ArrowRightOutlined style={{ marginRight: '10px' }} />
                          {item.section}
                        </li>
                      </NavLink>
                    );
                  })}
              </Panel>
            );
          })}
      </Collapse>
    </StyledSectios>
  );
};

export default Sections;
