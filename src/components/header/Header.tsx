import React from 'react'

import { Logo } from './logo/Logo'
import { ThemeButton } from './themeButton/ThemeButton'
import { Title } from './title/Title'
import './Header.css'

export function Header() {
    return (
        <header className="Header">
            <div className="Header-section">
                <div className="Header-logo-wrapper"><Logo /></div>
                <div className="Header-title-wrapper"><Title /></div>
                <nav className="Header-navbar">
                <ol>
                    <li className="Header-navbar-selected-item">latest</li>
                    |
                    <li>starred</li>
                </ol>
            </nav>
            </div>
            <div className="Header-section">
                <ThemeButton />
            </div>
        </header>
    )
}
