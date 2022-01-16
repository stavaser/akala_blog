import { combineReducers } from 'redux';
import screenReducer from './screen.reducer';
import articleReducer from './article.reducer';
import navReducer from './nav.reducer';

export const rootReducer = combineReducers({
  screen: screenReducer,
  article: articleReducer,
  nav: navReducer,
});
