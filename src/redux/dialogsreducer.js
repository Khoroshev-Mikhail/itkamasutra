let initialState = {
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
}


const dialogsreducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type){
        case 'UPDATE-MESSAGE' :
            stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        case 'ADD-MESSAGE' :
            let id = state.messagesData.length + 1;
            let newMessage = {id: id, message: state.newMessageText}
            stateCopy = {...state};
            stateCopy.newMessageText = '';
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        default :
            return state;
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
export const addMessageActionCreator = () => ({type : ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type : UPDATE_MESSAGE, newMessageText : text}) 

export default dialogsreducer;