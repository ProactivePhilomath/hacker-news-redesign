import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectTheme } from '../../../store/slices/theme/selector'
import { changeTheme } from '../../../store/slices/theme/slice'

import { ReactComponent as MoonIcon } from './moonIcon.svg'
import { ReactComponent as SunIcon} from './sunIcon.svg'
import './ThemeButton.css'

export const ThemeButton = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectTheme)

    const Icon = theme === 'light' ? MoonIcon : SunIcon

    const onButtonClicked = React.useCallback(() => {
        dispatch(changeTheme())
    }, [dispatch])

    return (
        <div className="ThemeButton" onClick={onButtonClicked}>
            <Icon />
        </div>
    )
}
