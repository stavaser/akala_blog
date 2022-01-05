import {
  DESKTOP,
  MOBILE,
  SCREEN_CHANGED,
  TABLET,
} from '../constants/screen.constants';

export const changeScreenMode = (width) => async (dispatch) => {
  if (width >= 1008)
    dispatch({
      type: SCREEN_CHANGED,
      payload: DESKTOP,
    });
  else if (width >= 641)
    dispatch({
      type: SCREEN_CHANGED,
      payload: TABLET,
    });
  else if (width <= 640)
    dispatch({
      type: SCREEN_CHANGED,
      payload: MOBILE,
    });
};
