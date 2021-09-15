import { subscribe, setUsers, setCurrentPage, setTotalCount, toggleFetching} from '../../redux/userreducer'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Users from './Users'
import React from 'react';
import {usersAPI } from '../../API/api';

class UsersAPI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount)
        })
    }
    setCurrentPage = (Page) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(Page)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items);
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

let UsersContainer = connect(f1, {
    subscribe,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleFetching,
    })(UsersAPI);
export default UsersContainer;