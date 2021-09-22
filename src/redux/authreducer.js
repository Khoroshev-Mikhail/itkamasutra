import {authAPI} from './../API/api'
import axios from 'axios'

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
        default :
            return state;
    }
}

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
export const setAuthUserData = (userId, email, login) => ({type : SET_AUTH_USER_DATA, data : {userId, email, login}})

//Thunks

export const authThunk = () => (dispatch) => {
    return authAPI.getAuth().then(response =>{
        if(response.data.resultCode == 0){
            let {userId, login, email} = response.data.data
            dispatch(setAuthUserData(userId, login, email))
        }
    })
}

export default authreducer;