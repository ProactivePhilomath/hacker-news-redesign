import React from 'react';
import classnames from 'classnames'

import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { useAppSelector } from './store/hooks'
import { selectTheme } from './store/slices/theme/selector'
import './App.css';

function App() {
    const theme = useAppSelector(selectTheme)

    const appClassNames = classnames(
        'App', {
            'App-theme-light': theme === 'light',
            'App-theme-dark': theme === 'dark'
        })

    return (
        <div className={appClassNames}>
            <div className="App-topbar"/>
            <div className="App-content">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App;
