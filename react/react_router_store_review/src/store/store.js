import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import userInfosReducer from './slices/useInfoSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    userInfos: userInfosReducer,
  },
});

export default store;
