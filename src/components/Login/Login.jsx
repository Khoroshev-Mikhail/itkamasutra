import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { getLogInThunk } from '../../redux/authreducer'

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLogInThunk();
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </>
    )
}
export default connect(mapStateToProps, {getLogInThunk})(Login)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'pwd'} name={'pwd'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form : 'login'})(LoginForm)
