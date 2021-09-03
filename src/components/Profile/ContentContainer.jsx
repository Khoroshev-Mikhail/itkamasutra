import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setUserProfileAC } from '../../redux/postreducer';

class ContentContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
export default connect(f1, {setUserProfileAC} )(ContentContainer);