import { createSlice } from '@reduxjs/toolkit'

import type { Theme } from '../../../types'

export interface ThemeState {
    value: Theme
}

const initialState: ThemeState = {
    value: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: state => {
            if (state.value === 'light') {
                state.value = 'dark'
            } else {
                state.value = 'light'
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
