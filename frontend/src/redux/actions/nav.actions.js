import {
  CATEGORIES_REQUESTED,
  SECTIONS_REQUESTED,
} from '../constants/nav.constants';
import NavService from '../services/nav.service';

export const getCategories = () => async (dispatch) => {
  try {
    const res = await NavService.getCategories();
    dispatch({
      type: CATEGORIES_REQUESTED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
