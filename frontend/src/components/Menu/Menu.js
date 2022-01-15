import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const contents = [
    {
      title: 'College Admissions',
      icon: '🎓 ',
      subtitles: ['teenage portrait', 'student stories', 'student spotlight'],
    },
    {
      title: 'AKALA students',
      icon: '🧑🏻‍🤝‍🧑🏾 ',
      subtitles: [
        'spotlight schools',
        'community service',
        'articles',
        'standardized testing',
      ],
    },
    {
      title: 'Extra',
      icon: '🌟 ',
      subtitles: [
        'amazing opportunities ',
        'amazing podcasts',
        'just for fun!!',
      ],
    },
    // {
    //   title: 'ewfwqe',
    //   icon: 'wefwefwe',
    //   subtitles: [],
    // },
  ];
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {contents.map((item) => {
        return (
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">{item.icon}</span>
            {item.title}
            <svg
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
        );
      })}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
