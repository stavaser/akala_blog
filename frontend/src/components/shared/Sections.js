import { Divider, Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { StyledSectios } from './Sections.styled';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Sections = ({ data }) => {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <StyledSectios>
      <Collapse ghost accordion>
        {data &&
          data.map((category) => {
            return (
              <Panel
                header={
                  <>
                    <a
                      onClick={() => setActive(category.id)}
                      className={
                        category.id == active ? 'active category' : 'category'
                      }
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
                    </a>
                  </>
                }
                key={category.id}
              >
                <p>{category.description}</p>
                <Divider />
                {category.sections &&
                  category.sections.map((item) => {
                    return (
                      <a className="section">
                        <li>
                          <ArrowRightOutlined style={{ marginRight: '10px' }} />
                          {item.section}
                        </li>
                      </a>
                    );
                  })}
              </Panel>
            );
          })}
        {/* <Panel
          header={
            <>
              <h1>{data?.emoji + ' ' + data?.category}</h1>
            </>
          }
          key="1"
        >
          <p>{data?.description}</p>
          <Divider />
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
        </Panel> */}
      </Collapse>
    </StyledSectios>
  );
};

export default Sections;
