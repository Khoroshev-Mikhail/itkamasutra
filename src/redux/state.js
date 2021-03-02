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
    addPost(){
        let id = this._state.posts.postData.length + 1;
        let newPost = {id: id, message: this._state.posts.newPostText, likes: 0}
        this._state.posts.newPostText = '';
        this._state.posts.postData.push(newPost);
        this._reRenderEntireTree(this._state);
    },
    addMessage(){
        let id = this._state.messages.messagesData.length + 1;
        let newMessage = {id: id, message: this._state.messages.newMessageText}
        this._state.messages.newMessageText = '';
        this._state.messages.messagesData.push(newMessage);
        this._reRenderEntireTree(this._state);
    },
    updateNewPostText(text){
        this._state.posts.newPostText = text;
        this._reRenderEntireTree(this._state);
    },
    updateNewMessageText(text){
        this._state.messages.newMessageText = text;
        this._reRenderEntireTree(this._state);
    },
    subscribe(observer){
        this._reRenderEntireTree = observer;
    },

}

export default store;

    
window.store = store;

    
