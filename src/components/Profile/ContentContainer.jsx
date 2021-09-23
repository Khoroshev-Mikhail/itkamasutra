import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC, getUsersProfile } from '../../redux/postreducer';
import { withRouter, Redirect } from 'react-router';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

class ContentContainer extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getUsersProfile(userId)
    }
    render(){
        return <Content {...this.props} />
    }
}
const f1 = (state) => {
    return{
        profile : state.posts.profile,
    }
}

//let AuthRedirectComponent = withAuthRedirect(ContentContainer)

let withUrlDataContainerContent = withRouter(ContentContainer)

export default withAuthRedirect(connect(f1, {setUserProfileAC, getUsersProfile} )(withUrlDataContainerContent));
