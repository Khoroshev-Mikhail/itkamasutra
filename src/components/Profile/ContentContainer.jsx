import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC, getUsersProfile } from '../../redux/postreducer';
import { withRouter } from 'react-router';
import { usersAPI } from '../../API/api';

class ContentContainer extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        /*usersAPI.getUserProfile(userId).then(response => {
            this.props.setUserProfileAC(response.data);
        })*/
        this.props.getUsersProfile(userId)
    }
    render(){
        return (
            <div>
                <Content {...this.props} />
            </div>
        );
    }
}
const f1 = (state) => {
    return{
        profile : state.posts.profile
    }
}

let withUrlDataContainerContent = withRouter(ContentContainer)

export default connect(f1, {setUserProfileAC, getUsersProfile} )(withUrlDataContainerContent);
