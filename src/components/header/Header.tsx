import React from 'react'
import classnames from 'classnames'
import { Link, useRouteMatch } from "react-router-dom"

import { Logo } from './logo/Logo'
import { ThemeButton } from './themeButton/ThemeButton'
import { Title } from './title/Title'
import './Header.css'

export function Header() {
    const isInStarredRoute = Boolean(useRouteMatch({
        path: "/starred",
        exact: false
    }))

    const latestClassNames = classnames({'Header-navbar-selected-item': !isInStarredRoute})
    const starredClassNames = classnames({'Header-navbar-selected-item': isInStarredRoute})

    return (
        <header className="Header">
            <div className="Header-section">
                <div className="Header-logo-wrapper"><Logo /></div>
                <div className="Header-title-wrapper"><Title /></div>
                <nav className="Header-navbar">
                    <ul>
                        <li className={latestClassNames}>
                            <Link to="/latest">latest</Link>
                        </li>
                        |
                        <li className={starredClassNames}>
                            <Link to="/starred">starred</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="Header-section">
                <ThemeButton />
            </div>
        </header>
    )
}
