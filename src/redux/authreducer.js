import { stopSubmit } from 'redux-form'
import {authAPI} from './../API/api'

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth : false
}

const authreducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_AUTH_USER_DATA' :
            return {...state, ...action.data, isAuth : true}
        case 'DELETE_AUTH_USER_DATA' :
            return {...state, userId : null, email : null, login : null, isAuth : false, }
        default :
            return state;
    }
}

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
export const setAuthUserData = (userId, email, login) => ({type : SET_AUTH_USER_DATA, data : {userId, email, login}})
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA'
export const DeleteAuthUserData = () => ({type : DELETE_AUTH_USER_DATA})


//Thunks
export const exitThunk = () => (dispatch) => {
    return authAPI.getExit().then(response => {
        if(response.data.resultCode == 0){
            dispatch(DeleteAuthUserData())
        }
    })
}

export const authThunk = () => (dispatch) => {
    return authAPI.getAuth().then(response =>{
        if(response.data.resultCode == 0){
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    })
}

export const getLogInThunk = (email, password, rememberMe) => (dispatch) => {
    return authAPI.getLogIn(email, password, rememberMe).then(response => {
        if(response.data.resultCode == 0){
            dispatch(authThunk());
        } else {
            let errorMessage = response.data.messages.length > 0 ? response.data.messages : 'Some Error'
            dispatch(stopSubmit("login", {_error : errorMessage}))
        }
    })
}

export default authreducer;