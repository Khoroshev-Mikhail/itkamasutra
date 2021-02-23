let reRenderEntireTree = () => {
    console.log('ara');
}

  let state = {
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
    }

    export default state;

    export let addPost = () => {
        let id = state.posts.postData.length + 1;
        let newPost = {id: id, message: state.posts.newPostText, likes: 0}
        state.posts.newPostText = '';
        state.posts.postData.push(newPost);
        reRenderEntireTree(state);
    }

    export let addMessage = () => {
        let id = state.messages.messagesData.length + 1;
        let newMessage = {id: id, message: state.messages.newMessageText}
        state.messages.newMessageText = '';
        state.messages.messagesData.push(newMessage);
        reRenderEntireTree(state);
    }

    export let updateNewPostText = (text) => {
        state.posts.newPostText = text;
        reRenderEntireTree(state);
    }

    export let updateNewMessageText = (text) => {
        state.messages.newMessageText = text;
        reRenderEntireTree(state);
    }

    window.state = state;
    
    export let subscribe =(observer) => {
        reRenderEntireTree = observer;
    }

    
