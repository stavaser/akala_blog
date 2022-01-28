import {
  ARTICLE_ALL_REQUESTED,
  ARTICLE_SECTION_REQUESTED,
  ARTICLE_INFO_REQUESTED,
} from '../constants/article.constants';

const initialState = { list: [], category: '', section: '' };

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ARTICLE_ALL_REQUESTED:
      return { ...state, list: payload.list, category: payload.category, section: payload.section };
    case ARTICLE_INFO_REQUESTED:
      return { ...state, info: payload };
    default:
      return state;
  }
};

export default articleReducer;
