import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import FocusLock from 'react-focus-lock';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.jpeg';
import logo from '../../assets/images/logo_name_white.png';
const Header = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div className="logo">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              {/* <span>G</span>
              <span>O</span>
              <span>A</span>
              <span>K</span>
              <span>A</span>
              <span>L</span>
              <span>A</span> */}
              <img src={logo} />
            </Link>
          </div>
          {/* <div className="burger">
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu categories={categories} open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div> */}
          <div className="social-media">
            <div className="icons">
              <InstagramOutlined />
              <FacebookOutlined />
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
