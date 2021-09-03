import { combineReducers, createStore } from "redux";
import dialogsreducer from "./dialogsreducer";
import myappreducer from "./myappreducer";
import postreducer from "./postreducer";
import sidebarreducer from "./sidebarreducer";
import usersreducer from "./userreducer";

let reducers = combineReducers({
    posts : postreducer,
    messages : dialogsreducer,
    friends : sidebarreducer,
    usersData : usersreducer,
    myapp : myappreducer
})

let store = createStore(reducers);
window.store = store;

export default store;