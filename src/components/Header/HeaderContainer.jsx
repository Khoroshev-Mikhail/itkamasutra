import React from "react";
import Header from "./Header";
import { authThunk} from "../../redux/authreducer";
import { connect } from "react-redux";
import {authAPI} from './../../API/api'

class HeaderContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.authThunk();
    }
    render(){
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps, {authThunk})(HeaderContainer);