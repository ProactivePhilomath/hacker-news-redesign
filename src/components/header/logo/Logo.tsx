import React from 'react'
import { Link } from "react-router-dom"

import yCombinatorLogo from './yCombinatorLogo.png'
import './Logo.css'

export const Logo = () => (
    <div className="Logo">
        <Link to="/">
            <img src={yCombinatorLogo} alt="Y Combinator" />
        </Link>
    </div>
)
