import React from 'react';

import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import './App.css';

function App() {
    return (
        <div className="App App-theme-light">
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
