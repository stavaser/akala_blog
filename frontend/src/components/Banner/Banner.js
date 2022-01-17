import { Tabs, Timeline } from 'antd';
import React from 'react';
import { StyledBanner } from './Banner.styled';
const { TabPane } = Tabs;
const Banner = ({ title, subtitle }) => {
  const animate = (text) => {
    return text.split('').forEach((character) => <span>{character}</span>);
  };

  return (
    <StyledBanner>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </StyledBanner>
  );
};

export default Banner;
