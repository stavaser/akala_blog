import { Collapse, Divider } from 'antd';
import React from 'react';
import { StyledSiderMenu } from './SiderMenu.styled';

const { Panel } = Collapse;

const SiderMenu = () => {
  return (
    <StyledSiderMenu>
      <Collapse ghost accordion>
        <Panel
          header={
            <h1>
              <span>🏠</span>Home
            </h1>
          }
          key="1"
        >
          <p>
            We are AKALA, an AI-enabled College Admissions Counseling platform
            that helps students navigate the complicated journey to college.{' '}
          </p>
          <Divider />
        </Panel>
        <Panel header={<a>This is panel</a>} key="2">
          text
        </Panel>
        <Panel header={<a>This is panel</a>} key="3">
          text
        </Panel>
      </Collapse>
    </StyledSiderMenu>
  );
};

export default SiderMenu;
