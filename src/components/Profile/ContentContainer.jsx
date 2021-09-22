import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC, getUsersProfile } from '../../redux/postreducer';
import { withRouter, Redirect } from 'react-router';

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
        if(!this.props.isAuth) return <Redirect to={'/Login'} />
        return (
            <div>
                <Content {...this.props} />
            </div>
        );
    }
}
const f1 = (state) => {
    return{
        profile : state.posts.profile,
        isAuth : state.auth.isAuth
    }
}

let withUrlDataContainerContent = withRouter(ContentContainer)

export default connect(f1, {setUserProfileAC, getUsersProfile} )(withUrlDataContainerContent);
