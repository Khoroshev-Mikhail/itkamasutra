import { stopSubmit } from 'redux-form'
import {authAPI} from '../API/api'
import { authThunk } from './authreducer'

let initialState = {
    initialized : false
}

const appreducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_INITIALIZED' :
            return {...state, initialized : true}
        default :
            return state;
    }
}

const SET_INITIALIZED = 'SET_INITIALIZED'
export const setInitialized = () => ({type : SET_INITIALIZED})


//Thunks
export const initializeApp = () => (dispatch) => {
    let promise = authThunk();
    Promise.all([promise]).then(()=>{dispatch(setInitialized)})
}

export default appreducer;