import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import FocusLock from 'react-focus-lock';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { StyledHeader } from './Header.styled';
const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div className="logo">
            <span>G</span>
            <span>O</span>
            <span>A</span>
            <span>K</span>
            <span>A</span>
            <span>L</span>
            <span>A</span>
          </div>
          <div className="burger">
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
