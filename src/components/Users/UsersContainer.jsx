import { subscribeAC, setUsersAC, setCurrentPageAC, setTotalCount} from '../../redux/userreducer'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Users from './Users'
import React from 'react';

class UsersAPI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    setCurrentPage = (Page) => {
        this.props.setCurrentPage(Page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${Page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render () {
        return(
            <Users {...this.props} setCurrentPage={this.setCurrentPage}/>
        )
    }
}

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

let UsersContainer = connect(f1, f2)(UsersAPI);
export default UsersContainer;