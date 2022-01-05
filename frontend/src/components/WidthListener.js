import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SCREEN_CHANGED } from '../redux/constants/screen.constants';

const WidthListener = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const screen_mode = useSelector((state) => state.screen.mode);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    dispatch({
      type: SCREEN_CHANGED,
      payload: { size: width },
    });
  }, []);

  console.log(screen_mode);
};

export default WidthListener;
