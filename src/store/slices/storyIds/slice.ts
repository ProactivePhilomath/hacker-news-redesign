import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchNewStoryIds } from './api'

export interface StoryIdsState {
    value: Array<number>
    status: 'idle' | 'loading' | 'failed'
}

const initialStoryIdsState: StoryIdsState = {
    value: [],
    status: 'idle'
}

export const requestStoryIds = createAsyncThunk(
    'storyIds/fetchNewStoryIds',
    async () => await fetchNewStoryIds()
)

export const storyIdsSlice = createSlice({
    name: 'storyIds',
    initialState: initialStoryIdsState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestStoryIds.pending, state => { state.status = 'loading' })
            .addCase(requestStoryIds.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = action.payload
            })
            .addCase(requestStoryIds.rejected, state => { state.status = 'failed' })
    }
})

export default storyIdsSlice.reducer
