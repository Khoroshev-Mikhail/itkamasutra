let initialState = {
        postData : [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'I am fine!', likes: 122},
        {id: 3, message: 'we are fine too', likes: 222},
        ],
        newPostText : 'it-kamasutra.com',
}

const postreducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case 'UPDATE-POST' : 
            stateCopy = {...state, 
                newPostText : action.newPostText}
            return stateCopy;
        case 'ADD-POST' :
            let id = state.postData.length + 1;
            stateCopy = {...state,
                postData : [...state.postData, 
                    {id: id, message: state.newPostText, likes: 0}
                ]
            };
            stateCopy.newPostText = '';
            return stateCopy;
        default :
            return state;
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
export const addPostActionCreator = () => ({type : ADD_POST})
export const updatePostActionCreator = (text) => ({type : UPDATE_POST, newPostText : text}) 

export default postreducer;