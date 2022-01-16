import {
  CATEGORIES_REQUESTED,
  SECTIONS_REQUESTED,
  CATEGORY_CHANGED,
  SECTION_CHANGED,
} from '../constants/nav.constants';

const initialState = {};

const navReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_REQUESTED:
      return { ...state, categories: payload };
    case SECTIONS_REQUESTED:
      return { ...state, sections: payload };
    default:
      return state;
  }
};

export default navReducer;
