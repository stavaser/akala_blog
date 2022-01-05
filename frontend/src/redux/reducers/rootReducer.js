import { combineReducers } from 'redux';
import screenReducer from './screen.reducer';

export const rootReducer = combineReducers({
  screen: screenReducer,
});
