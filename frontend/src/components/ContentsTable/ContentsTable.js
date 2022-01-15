import { Timeline, Steps, Divider } from 'antd';
import React from 'react';
import { StyledContentsTable } from './ContentsTable.styled';
const { Step } = Steps;

const ContentsTable = () => {
  const onChange = () => {
    console.log('helo');
  };
  return (
    <StyledContentsTable>
      <div className="toc-title">Table of Contents</div>
      <Divider />
      <Steps onChange={onChange} direction="vertical" size="small" current={2}>
        <Step
          title="Finished"
          description={
            <div className="sections">
              <p>
                titleadsnfkjwehfkwetitleadsnfkjwehfkwetitleadsnfk
                jwehfkwetitleadsnfkjwehfkwetitleadsnfkjwehfkwe
              </p>
              <p>titleadsnfkjwehfkwe</p>
            </div>
          }
        />
        <Step
          title="In Progress"
          description={
            <div className="sections">
              <p>titleadsnfkjwehfkwe</p>
            </div>
          }
        />
        <Step
          title="In Progress"
          description={
            <div className="sections">
              <p>titleadsnfkjwehfkwe</p>
            </div>
          }
        />
        <Step
          title="Waiting"
          description={
            <div className="sections">
              <p>titleadsnfkjwehfkwe</p>
              <p>titleadsnfkjwehfkwe</p>
              <div className="sections">
                <p>titleadsnfkjwehfkwe</p>
                <p>titleadsnfkjwehfkwe</p>
              </div>
            </div>
          }
        />
      </Steps>
    </StyledContentsTable>
  );
};

export default ContentsTable;
