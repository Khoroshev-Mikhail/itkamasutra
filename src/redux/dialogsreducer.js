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
}


const dialogsreducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type){
        case 'ADD-MESSAGE' :
            let id = state.messagesData.length + 1;
            stateCopy = {...state, 
                messagesData : [...state.messagesData, 
                    {id: id, message: action.newMessageText}
                ]
            }
            stateCopy.newMessageText = '';
            return stateCopy;
        default :
            return state;
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
export const addMessage = (newMessageText) => ({type : ADD_MESSAGE, newMessageText})

export default dialogsreducer;