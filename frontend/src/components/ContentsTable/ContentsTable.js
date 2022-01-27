import { Steps, Divider } from 'antd';
import React from 'react';
import { StyledContentsTable } from './ContentsTable.styled';
const { Step } = Steps;

const ContentsTable = ({ headings, activeId }) => {
  console.log(headings, activeId);
  const onChange = () => {};
  const activeKey = headings.indexOf(headings.find((x) => x.id === activeId));
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
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              title={<a href={`#${heading.id}`}>{heading.title}</a>}
              description={
                heading.items.length > 0 && (
                  <div className="sections">
                    {heading.items.map((child) => (
                      <p
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(`#${child.id}`).scrollIntoView({
                            behavior: 'smooth',
                          });
                        }}
                      >
                        <a href={`#${child.id}`}>{child.title}</a>
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
