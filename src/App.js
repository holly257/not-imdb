import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy';
import config from './config';
import ApiService from './api-service';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage/SavedPage';
import NotFoundPage from './components/NotFoundPage';
import './styling/App.css';


function App() {
    return (
        <div className="App">
            <Nav />
            <main className="main-app">
                <Routes>
                    <Route path="/" element={ <SearchPage/> } />
                    <Route path="/saved" element={ <SavedPage/> } />
                    <Route element={ <NotFoundPage/> } />
                </Routes>
            </main>
        </div>
    );
}

export default App;