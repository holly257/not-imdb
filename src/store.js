
    // initializeCardsFromStorage: () => {},
    // saveNewCard: () => {},
    // deleteCard: () => {},
    // updateResults: () => {},
    // updateError: () => {},
    // clearError: () => {},

    import { createStore, action, thunk } from "easy-peasy";
    import config from './config';
        
    const search_term = '';
        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&q=${encodeURIComponent(
                search_term
            )}&image_type=photo&per_page=21`;
    
    const store = createStore({
      allCurrencies: {
        data: ['test', 'tags: "sky, clouds, nature"'],
        updateResult: action((state, payload) => {
          state.data = Object.values(payload);
        }),
        getAllCurrencies: thunk(async (actions) => {
          try {
            const res = await fetch(url, { method: 'get' });
            actions.updateResult(res?.data?.response?.fiats);
          } catch (error) {
            console.log(error);
          }
        }),
      },
      currencyRates: {
        rates: {},
        updateRates: action((state, payload) => {
          state.rates = payload;
        }),
        getCurrencyRates: thunk(async (actions) => {
          try {
            const res = await fetch(`/latest`);
            actions.updateRates(res?.data?.response?.rates);
          } catch (error) {
            console.log(error);
          }
        }),
      },
      conversion: {
        data: {
          to: "",
          amount: "",
        },
        updateTo: action((state, payload) => {
          state.data.to = payload;
        }),
        updateAmount: action((state, payload) => {
          state.data.amount = payload;
        }),
      },
    });
    export default store;