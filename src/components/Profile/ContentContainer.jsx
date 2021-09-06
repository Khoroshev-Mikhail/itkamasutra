import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC } from '../../redux/postreducer';
import { withRouter } from 'react-router';

class ContentContainer extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfileAC(response.data);
        })
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

export default connect(f1, {setUserProfileAC} )(withUrlDataContainerContent);
