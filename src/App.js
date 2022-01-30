import React from 'react';
import config from './config';
import GrowingContext from './context';
import ApiService from './api-service';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage/SavedPage';
import NotFoundPage from './components/NotFoundPage';
import './styling/App.css';

class App extends React.Component {
    static contextType = GrowingContext;

    componentDidMount() {
        this.context.clearError();
        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&image_type=photo&per_page=21`;

        ApiService.getImages(url)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log('error', error);
            });

        let local_cards = JSON.parse(localStorage.getItem('saved_cards'));
        if (local_cards) {
            this.context.initializeCardsFromStorage(local_cards);
        }
    }

    render() {
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
}

export default App;