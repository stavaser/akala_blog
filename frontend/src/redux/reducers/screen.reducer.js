import {
  DESKTOP,
  MOBILE,
  SCREEN_CHANGED,
  TABLET,
} from '../constants/screen.constants';

const initialState = {};

const screenReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCREEN_CHANGED:
      return { ...state, mode: payload };
    default:
      return state;
  }
};

export default screenReducer;
