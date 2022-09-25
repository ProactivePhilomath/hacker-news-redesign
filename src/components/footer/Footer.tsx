import React from 'react'

import './Footer.css'

export function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-topbar"/>
            <h1 className="Footer-title">Hacker News</h1>
            <nav className="Footer-navbar">
                <ol>
                    <li>latest</li>
                    |
                    <li>starred</li>
                </ol>
            </nav>
        </footer>
    )
}