import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Id } from '../../../types'
import { fetchStory } from './api'
import type { Story } from './types'

export interface StoriesState {
    value: Record<Id, Story>,
    status: 'idle' | 'loading' | 'failed'
}

const initialStoriesState: StoriesState = {
    value: {},
    status: 'idle'
}

export const requestStory = createAsyncThunk(
    'stories/fetchStory',
    async (id: number) => await fetchStory(id)
)

export const storiesSlice = createSlice({
    name: 'stories',
    initialState: initialStoriesState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestStory.pending, state => { state.status = 'loading' })
            .addCase(requestStory.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = {...state.value, [action.payload.id]: action.payload}
            })
            .addCase(requestStory.rejected, state => { state.status = 'failed' })
    }
})

export default storiesSlice.reducer
