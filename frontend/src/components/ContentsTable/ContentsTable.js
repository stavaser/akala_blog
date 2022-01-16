import { Timeline, Steps, Divider } from 'antd';
import { List } from 'rc-field-form';
import React from 'react';
import { StyledContentsTable } from './ContentsTable.styled';
const { Step } = Steps;

const ContentsTable = ({ headings, activeId = 0 }) => {
  console.log(headings[activeId] && headings[activeId].items.length);
  const onChange = () => {
    console.log('helo');
  };
  return (
    <StyledContentsTable>
      <div className="toc-title">Table of Contents</div>
      <Divider />
      <Steps
        onChange={onChange}
        direction="vertical"
        size="small"
        current={activeId - 1}
      >
        {headings.map((heading) => {
          return (
            <Step
              key={heading.title}
              className={heading.title === activeId ? 'active' : ''}
              title={heading.title}
              description={
                heading.items.length > 0 && (
                  <div className="sections">
                    {heading.items.map((child) => (
                      <p>{child.title}</p>
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
