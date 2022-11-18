import cities from './Cities';
import search from './Search';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  cities,
  search,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
