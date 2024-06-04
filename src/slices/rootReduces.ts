// src/slices/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

const rootReducer = combineReducers({
  token: tokenReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
