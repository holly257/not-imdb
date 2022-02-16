import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import store from './store';

const Store = createStore(store);


ReactDOM.render(
    <StoreProvider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>{' '}
    </StoreProvider >,
    document.getElementById('root')
);
