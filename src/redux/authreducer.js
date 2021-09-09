let initialState = {
    userId : null,
    email : null,
    login : null
}

const authreducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_AUTH_USER_DATA' :
            return {...state, ...action.data}
        default :
            return state;
    }
}

const SET_AUTH_USERS_DATA = 'SET_AUTH_USER_DATA'
export const setAuthUserData = (userId, email, login) => ({type : 'SET_AUTH_USER_DATA', data : {userId, email, login}})

export default authreducer;