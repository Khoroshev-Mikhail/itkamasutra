import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsreducer from "./dialogsreducer";
import myappreducer from "./myappreducer";
import postreducer from "./postreducer";
import sidebarreducer from "./sidebarreducer";
import usersreducer from "./userreducer";
import authreducer from './authreducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appreducer from './appreducer'

let reducers = combineReducers({
    posts : postreducer,
    messages : dialogsreducer,
    friends : sidebarreducer,
    usersData : usersreducer,
    myapp : myappreducer,
    auth : authreducer,
    form : formReducer,
    app : appreducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;