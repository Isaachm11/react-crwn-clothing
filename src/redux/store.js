// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;