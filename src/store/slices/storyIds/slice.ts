import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Id } from '../../../types'
import { fetchNewStoryIds } from './api'

export interface StoryIdsState {
    recent: Array<Id>
    saved: Array<Id>
    status: 'idle' | 'loading' | 'failed'
}

const initialStoryIdsState: StoryIdsState = {
    recent: [],
    saved: [],
    status: 'idle'
}

export const requestStoryIds = createAsyncThunk(
    'storyIds/fetchNewStoryIds',
    async () => await fetchNewStoryIds()
)

export const storyIdsSlice = createSlice({
    name: 'storyIds',
    initialState: initialStoryIdsState,
    reducers: {
        toggleSaveId: (state, action: PayloadAction<Id>) => {
            if (state.saved.includes(action.payload)) {
                state.saved = state.saved.filter(id => !(id === action.payload))
            } else {
                state.saved = [...state.saved, action.payload]
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(requestStoryIds.pending, state => { state.status = 'loading' })
            .addCase(requestStoryIds.fulfilled, (state, action) => {
                state.status = 'idle'
                state.recent = action.payload
            })
            .addCase(requestStoryIds.rejected, state => { state.status = 'failed' })
    }
})

export const { toggleSaveId } = storyIdsSlice.actions

export default storyIdsSlice.reducer
