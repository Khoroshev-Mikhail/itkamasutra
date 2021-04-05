import dialogsreducer from "./dialogsreducer";
import postreducer from "./postreducer";

let store = {
    _state : {
        posts : {
            postData : [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: 'I am fine!', likes: 122},
            {id: 3, message: 'we are fine too', likes: 222},
            ],
            newPostText : 'it-kamasutra.com',
        },
        messages : {
            dialogsData : [
                {id: 1, name: 'Таня'},
                {id: 2, name: 'Фрол'},
                {id: 3, name: 'Мама'},
                {id: 4, name: 'Лена'},
                ],
            messagesData : [
                {id: 1, message: 'Перове сообщение'},
                {id: 2, message: 'Второе сообщение'},
                {id: 3, message: 'Третье сообщение'},
                {id: 4, message: 'Четвёртое сообщение'},
                ],
            newMessageText : 'New message',
        },
        friends : {
            friendsData : [
                {name: 'Фрол', id: 1},
                {name: 'Мама', id:2},
                {name: 'Таня', id:3},
            ]
        }
    },
    reRenderEntireTree(){
        console.log('ara');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._reRenderEntireTree = observer;
    },
    dispatch(action){
        postreducer(this._state.posts, action);
        dialogsreducer(this._state.messages, action);
        this._reRenderEntireTree(this._state);
    },
    
}

export default store;



window.store = store;

    
