import { Tabs, Timeline } from 'antd';
import React from 'react';
import { StyledBanner } from './Banner.styled';
const Banner = ({ title, subtitle }) => {
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
      <h3>{subtitle}</h3>
    </StyledBanner>
  );
};

export default Banner;
