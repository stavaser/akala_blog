import { PROMPT_ALL_REQUESTED } from '../constants/prompt.constants';

const initialState = {};

const promptReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROMPT_ALL_REQUESTED:
      return { ...state, list: payload };
    default:
      return state;
  }
};

export default promptReducer;
