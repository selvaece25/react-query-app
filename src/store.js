import { configureStore } from '@reduxjs/toolkit';
import { onBoardingSlice } from './pages/onboarding/onboarding-slice';
import { authorSlice } from './pages/authors/author-slice';
export default configureStore({
  reducer: {
    user: onBoardingSlice.reducer,
    author: authorSlice.reducer,
  },
});
