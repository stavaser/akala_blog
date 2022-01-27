import {
  ARTICLE_ALL_REQUESTED,
  ARTICLE_SECTION_REQUESTED,
  ARTICLE_INFO_REQUESTED,
} from '../constants/article.constants';
import ArticleService from '../services/article.service';

export const getAllArticles =
  (category, section = null) =>
  async (dispatch) => {
    try {
      const res = await ArticleService.getAll(category, section);
      dispatch({
        type: ARTICLE_ALL_REQUESTED,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const getArticleInfo = (article_id) => async (dispatch) => {
  try {
    console.log(article_id);
    const res = await ArticleService.getInfo(article_id);
    dispatch({
      type: ARTICLE_INFO_REQUESTED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
