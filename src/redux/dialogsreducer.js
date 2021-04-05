const dialogsreducer = (state, action) => {
    switch (action.type){
        case 'UPDATE-MESSAGE' :
            state.newMessageText = action.newMessageText;
            return state;
        case 'ADD-MESSAGE' :
            let id = state.messagesData.length + 1;
            let newMessage = {id: id, message: state.newMessageText}
            state.newMessageText = '';
            state.messagesData.push(newMessage);
            return state;
        default :
            return state;
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
export const addMessageActionCreator = () => ({type : ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type : UPDATE_MESSAGE, newMessageText : text}) 

export default dialogsreducer;