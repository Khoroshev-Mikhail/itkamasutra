let initialState = {
    users : [],
    pageSize : 30,
    totalUsersCount : 25,
    currentPage : 1,
    isFetching : true
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
        case "SET_CURRENT_PAGE":
            return {...state, currentPage : action.currentPage}
        case "SET_TOTAL_COUNT" :
            return {...state, totalUsersCount : action.totalCount}
        case "TOGGLE_FETCHING" :
            return {...state, isFetching : action.isFetching}
        default :
            return state;
    }
}

const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export let subscribeAC = (id) => ({type: SUBSCRIBE, userId : id})
export let setUsersAC = (users) => ({type: SET_USERS, users: users})
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export let setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export let toggleFetching = (isFetching) => ({type : TOGGLE_FETCHING, isFetching : isFetching})

export default usersreducer;
