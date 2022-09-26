import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

export function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-topbar"/>
            <h1 className="Footer-title">Hacker News</h1>
            <nav className="Footer-navbar">
                <ul>
                    <li>
                        <Link to="/latest">latest</Link>
                    </li>
                    |
                    <li>
                        <Link to="/starred">starred</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}