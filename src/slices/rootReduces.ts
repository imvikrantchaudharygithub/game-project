// src/slices/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
