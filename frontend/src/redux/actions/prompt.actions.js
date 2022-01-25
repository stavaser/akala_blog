import { PROMPT_ALL_REQUESTED } from '../constants/prompt.constants';
import PromptService from '../services/prompt.service';

export const getAllPrompts = () => async (dispatch) => {
  try {
    const res = await PromptService.getAll();
    dispatch({
      type: PROMPT_ALL_REQUESTED,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
