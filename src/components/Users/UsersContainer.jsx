import { subscribe, setUsers, setCurrentPage, setTotalCount, toggleFetching, toggleProgress, getUsers, followThunk, unFollowThunk} from '../../redux/userreducer'
import {connect} from 'react-redux'
import Users from './Users'
import React from 'react';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    setCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }
    render () {
        return(
            <>
            {this.props.fetching ? <Preloader /> : 'ss'}
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
        fetching : state.usersData.isFetching,
        followingProgress : state.usersData.followingProgress,
    }
}

export default compose(
    connect(f1, {
        subscribe,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleFetching, 
        toggleProgress,
        getUsers,
        followThunk,
        unFollowThunk,
        }),
        withAuthRedirect
)(UsersAPI)