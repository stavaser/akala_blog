import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORY_CHANGED } from '../../redux/constants/nav.constants';
import { useDispatch } from 'react-redux';

const Menu = ({ categories, open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCategory = (item) => {
    console.log(item);
    dispatch({
      type: CATEGORY_CHANGED,
      payload: item,
    });
    navigate(item.category, { replace: true });
  };
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div />
      <div className="sections">
        {categories &&
          categories.map((item) => {
            return (
              <a tabIndex={tabIndex} onClick={() => changeCategory(item)}>
                <span aria-hidden="true">{item.emoji} </span>
                {item.category}
                <svg
                  className="stroke"
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
      </div>

      <div className="social-media">
        <div className="icons">
          <InstagramOutlined />
          <FacebookOutlined />
          <TwitterOutlined />
          <LinkedinOutlined />
        </div>
        <a>info@goakala.com</a>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
