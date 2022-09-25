import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import storyIdsReducer from './slices/storyIds/slice'
import storiesReducer from './slices/stories/slice'

export const store = configureStore({
  reducer: {
    storyIds: storyIdsReducer,
    stories: storiesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
