import { combineReducers } from 'redux';
import screenReducer from './screen.reducer';
import articleReducer from './article.reducer';
import navReducer from './nav.reducer';
import promptReducer from './prompt.reducer';

export const rootReducer = combineReducers({
  screen: screenReducer,
  article: articleReducer,
  nav: navReducer,
  prompt: promptReducer,
});
