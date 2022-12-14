import React from 'react'
import { Link } from "react-router-dom"

import { useAppSelector } from '../../../store/hooks'
import { selectTheme } from '../../../store/slices/theme/selector';
import hackerNewsLogoBlack from './hackerNewsLogoBlack.png'
import hackerNewsLogoWhite from './hackerNewsLogoWhite.png'

export const Title = () => {
    const theme = useAppSelector(selectTheme)

    const titleLogo = theme === 'light' ? hackerNewsLogoBlack : hackerNewsLogoWhite

    return (
        <Link to="/">
            <img src={titleLogo} alt="Hacker News" />
        </Link>
    )
} 
