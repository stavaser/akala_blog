import {
  CATEGORIES_REQUESTED,
  SECTIONS_REQUESTED,
  CATEGORY_CHANGED,
  SECTION_CHANGED,
} from '../constants/nav.constants';

const initialState = {
  categories: [],
  category: { id: 1 },
};

const navReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_REQUESTED:
      return { ...state, categories: payload };
    case CATEGORY_CHANGED:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export default navReducer;
