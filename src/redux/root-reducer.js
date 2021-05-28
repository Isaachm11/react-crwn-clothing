// A reducer is a function that gets to properties
// It gets a state object which represents the last state or an initial state and recieves an action
// this action is an object that has a type (string) that tells the specific action and a payload (any)

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,

    // Name of the reducers we want to persist
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer( persistConfig, rootReducer )