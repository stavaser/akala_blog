import { Tabs, Timeline } from 'antd';
import React from 'react';
import { StyledBanner } from './Banner.styled';
const { TabPane } = Tabs;
const Banner = ({ title, subtitle }) => {
  console.log(title?.length);
  return (
    <StyledBanner numLetters={title?.length}>
      <h1>
        {title?.split(' ').map((word) => {
          return (
            <>
              {word?.split('').map((letter, idx) => {
                return <span>{letter}</span>;
              })}
              <br />
            </>
          );
        })}
      </h1>
      {/* style={{ animationDelay: `${idx * 4}s` }} */}
      <h3>{subtitle}</h3>
    </StyledBanner>
  );
};

export default Banner;
