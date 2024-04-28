import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import topicSlice from '../features/topicSlice';
import courseSlice from '../features/coursesSlice.js';
import postsSlice from '../features/postsSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicSlice,
    courses: courseSlice,
    posts: postsSlice
  },
});
