import { Timeline, Steps, Divider } from 'antd';
import { List } from 'rc-field-form';
import React, { useState } from 'react';
import { StyledContentsTable } from './ContentsTable.styled';
const { Step } = Steps;

const ContentsTable = ({ headings, activeId }) => {
  const onChange = () => {};
  const activeKey = headings.indexOf(headings.find((x) => x.title === activeId));
  return (
    <StyledContentsTable>
      <div className="toc-title">Table of Contents</div>
      <Divider />
      <Steps onChange={onChange} direction="vertical" size="small" current={activeKey}>
        {headings.map((heading, index) => {
          console.log(index);
          return (
            <Step
              key={index}
              className={heading.title === activeId ? 'active' : ''}
              title={
                <a
                  href={`#${heading.title}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.title}`).scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {heading.title}
                </a>
              }
              description={
                heading.items.length > 0 && (
                  <div className="sections">
                    {heading.items.map((child) => (
                      <p>
                        <a
                          href={`#${child.title}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${child.title}`).scrollIntoView({
                              behavior: 'smooth',
                            });
                          }}
                        >
                          {child.title}
                        </a>
                      </p>
                    ))}
                  </div>
                )
              }
            />
          );
        })}
      </Steps>
    </StyledContentsTable>
  );
};

export default ContentsTable;
