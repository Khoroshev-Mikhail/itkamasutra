import {usersAPI, profileAPI} from './../API/api'

let initialState = {
        postData : [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'I am fine!', likes: 122},
        {id: 3, message: 'we are fine too', likes: 222},
        ],
        profile : null,
        status : '',
}

const postreducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case 'ADD-POST' :
            let id = state.postData.length + 1;
            stateCopy = {...state,
                postData : [...state.postData, 
                    {id: id, message: action.newPostText, likes: 0}
                ]
            };
            return stateCopy;
        case 'SET-USER-PROFILE' :
            return {...state, profile : action.profile}
        case 'SET_STATUS' : 
            return {...state, status : action.status}
        default :
            return state;
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
export const addPost = (newPostText) => ({type : ADD_POST, newPostText : newPostText})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile : profile})
export const setStatus = (status) => ({type: SET_STATUS, status : status})

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    })
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode == 0){
            dispatch(setStatus(status))
        }
    })
}


export default postreducer;