import { combineReducers, createStore } from "redux";
import dialogsreducer from "./dialogsreducer";
import postreducer from "./postreducer";
import sidebarreducer from "./sidebarreducer";
import usersreducer from "./userreducer";

let reducers = combineReducers({
    posts : postreducer,
    messages : dialogsreducer,
    friends : sidebarreducer,
    usersData : usersreducer,
})

let store = createStore(reducers);


export default store;