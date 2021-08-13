import { subscribeAC, setUsersAC, setCurrentPageAC, setTotalCount} from '../../redux/userreducer'
import {connect} from 'react-redux'
import Users from './Users'

const f1 = (state) => {
    return {
        users : state.usersData.users,
        pageSize : state.usersData.pageSize,
        totalUsersCount : state.usersData.totalUsersCount,
        currentPage : state.usersData.currentPage 
    }
}

const f2 = (dispatch) => {
    return {
        subscribe : (id) => {dispatch(subscribeAC(id))},
        setUsers : (users) => {dispatch(setUsersAC(users))},
        setCurrentPage : (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCount : (totalCount) => {dispatch(setTotalCount(totalCount))}
    }
}

let UsersContainer = connect(f1, f2)(Users);
export default UsersContainer;