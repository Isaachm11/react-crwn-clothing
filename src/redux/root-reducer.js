// A reducer is a function that gets to properties
// It gets a state object which represents the last state or an initial state and recieves an action
// this action is an object that has a type (string) that tells the specific action and a payload (any)

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})