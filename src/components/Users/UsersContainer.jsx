import { subscribeAC, setUsersAC } from '../../redux/userreducer'
import {connect} from 'react-redux'
import Users from './UsersC'

const f1 = (state) => {
    return {
        users : state.usersData.users
    }
}

const f2 = (dispatch) => {
    return {
        subscribe : (id) => {dispatch(subscribeAC(id))},
        setUsers : (users) => {dispatch(setUsersAC(users))}
    }
}

let UsersContainer = connect(f1, f2)(Users);
export default UsersContainer;