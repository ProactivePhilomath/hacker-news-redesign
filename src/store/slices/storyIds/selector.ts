import type { RootState } from '../../store'

export const selectRecentStoryIds = (state: RootState) => state.storyIds.recent

export const selectSavedStoryIds = (state: RootState) => state.storyIds.saved
