import { combineReducers, createStore } from "redux";
import dialogsreducer from "./dialogsreducer";
import postreducer from "./postreducer";
import sidebarreducer from "./sidebarreducer";

let reducers = combineReducers({
    posts : postreducer,
    messages : dialogsreducer,
    friends : sidebarreducer,
})

let store = createStore(reducers);


export default store;