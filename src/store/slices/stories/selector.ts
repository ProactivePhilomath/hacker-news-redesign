import type { RootState } from '../../store'

export const selectStories = (state: RootState) => {
    return state.stories.value
}