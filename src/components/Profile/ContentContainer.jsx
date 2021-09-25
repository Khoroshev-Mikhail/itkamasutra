import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC, getUsersProfile, getStatus, updateStatus } from '../../redux/postreducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ContentContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let userId = this.props.userId;
        if(!userId) userId = 2;
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }
    render(){
        return <Content {...this.props} />
    }
}
const f1 = (state) => {
    return{
        profile : state.posts.profile,
        status : state.posts.status,
        userId : state.auth.userId
    }
}


export default compose(
    withRouter,
    connect(f1, {setUserProfileAC, getUsersProfile, getStatus, updateStatus} ),
    withAuthRedirect
)(ContentContainer)
