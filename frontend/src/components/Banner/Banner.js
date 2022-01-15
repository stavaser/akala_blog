import { Tabs, Timeline } from 'antd';
import React from 'react';
import { StyledBanner } from './Banner.styled';
const { TabPane } = Tabs;
const Banner = () => {
  return (
    <StyledBanner>
      <h1>College Admissions</h1>
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </StyledBanner>
  );
};

export default Banner;
