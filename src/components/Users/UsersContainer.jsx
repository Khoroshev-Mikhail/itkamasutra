import { subscribeAC, setUsersAC, setCurrentPageAC, setTotalCount, toggleFetching} from '../../redux/userreducer'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Users from './Users'
import React from 'react';

class UsersAPI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.fetching)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false)
            console.log(this.props.fetching)
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    setCurrentPage = (Page) => {
        console.log(this.props.fetching)
        this.props.toggleFetching(true)
        this.props.setCurrentPage(Page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${Page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false)
            console.log(this.props.fetching)
            this.props.setUsers(response.data.items);
        })
    }
    render () {
        return(
            <>
            {this.props.fetching ? <img src="https://img.gazeta.ru/files3/412/13414412/Depositphotos_435546832_l-2015-pic905-895x505-59593.jpg" style={{width : '200px'}}/> : 'ss'}
            <Users {...this.props} setCurrentPage={this.setCurrentPage}/>
            </>
        )
    }
}

const f1 = (state) => {
    return {
        users : state.usersData.users,
        pageSize : state.usersData.pageSize,
        totalUsersCount : state.usersData.totalUsersCount,
        currentPage : state.usersData.currentPage,
        fetching : state.usersData.isFetching
    }
}

const f2 = (dispatch) => {
    return {
        subscribe : (id) => {dispatch(subscribeAC(id))},
        setUsers : (users) => {dispatch(setUsersAC(users))},
        setCurrentPage : (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCount : (totalCount) => {dispatch(setTotalCount(totalCount))},
        toggleFetching : (isFetching) => {dispatch(toggleFetching(isFetching))},
    }
}

let UsersContainer = connect(f1, f2)(UsersAPI);
export default UsersContainer;