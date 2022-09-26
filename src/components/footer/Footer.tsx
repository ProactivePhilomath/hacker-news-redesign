import React from 'react'
import classnames from 'classnames'
import { Link } from "react-router-dom"

import './Footer.css'

export function Footer() {
    const titleClassName = classnames("Footer-title", "Footer-link")

    return (
        <footer className="Footer">
            <div className="Footer-topbar"/>
            <h1 className={titleClassName}>
                <Link to="/">Hacker News</Link>
            </h1>
            <nav className="Footer-navbar">
                <ul>
                    <li className="Footer-link">
                        <Link to="/latest">latest</Link>
                    </li>
                    |
                    <li className="Footer-link">
                        <Link to="/starred">starred</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}