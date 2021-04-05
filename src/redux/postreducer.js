const postreducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-POST' : 
            state.newPostText = action.newPostText;
            return state;
        case 'ADD-POST' :
            let id = state.postData.length + 1;
            let newPost = {id: id, message: state.newPostText, likes: 0}
            state.newPostText = '';
            state.postData.push(newPost);
            return state;
        default :
            return state;
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
export const addPostActionCreator = () => ({type : ADD_POST})
export const updatePostActionCreator = (text) => ({type : UPDATE_POST, newPostText : text}) 

export default postreducer;