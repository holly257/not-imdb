
    // initializeCardsFromStorage: () => {},
    // saveNewCard: () => {},
    // deleteCard: () => {},
    // updateResults: () => {},
    // updateError: () => {},
    // clearError: () => {},

import { createStore, StoreProvider, action } from 'easy-peasy';

const model = {
    card: {
        items: [],
        saveNewCard: action((state, text) => {
            state.items.push(text);
        }),
    },
};

const store = createStore(model, {
    name: 'MyAwesomeStore',
});

ReactDOM.render(
    <StoreProvider store={store}>
    <App />
    </StoreProvider>,
    document.querySelector('#app'),
    );