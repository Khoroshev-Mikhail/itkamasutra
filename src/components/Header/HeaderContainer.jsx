import React from "react";
import Header from "./Header";
import axios from "axios";
import { setAuthUserData } from "../../redux/authreducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials : true}).then(response =>{
            if(response.data.resultCode == 0){
                let {userId, login, email} = response.data.data
                this.props.setAuthUserData(userId, login, email)
            }
        })
    }
    render(){
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);