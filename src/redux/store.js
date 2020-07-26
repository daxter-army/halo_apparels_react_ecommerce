import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

// Using environment variable to remove console.logs from the production build
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);