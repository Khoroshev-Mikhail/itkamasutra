let initialState = {
    users : []
}

const usersreducer = (state = initialState, action) => {
    switch(action.type){
        case "SUBSCRIBE" :
            return { ...state, users : state.users.map(
                u => {
                    if(u.id === action.userId && !u.followed){
                        return {...u,followed : true}
                    } else if(u.id === action.userId && u.followed){
                        return {...u,followed : false}
                    }
                    return u;
                }
            )
        }
        case "SET_USERS" : 
            return {...state, users : [/*...state.users,*/ ...action.users]}
        default :
            return state;
    }
}

const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET_USERS'

export let subscribeAC = (id) => ({type: SUBSCRIBE, userId : id})
export let setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersreducer;
