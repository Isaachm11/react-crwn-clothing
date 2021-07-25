// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddlware = createSagaMiddleware()

const middlewares = [sagaMiddlware];

if (process.env.NODE_ENV === 'development'){
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlware.run(rootSaga)

export const persistor = persistStore(store);