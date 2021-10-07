import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
//import { useLocation } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { getLogInThunk } from '../../redux/authreducer'
import { Element } from '../Common/FormsControls/FormControls'
import { maxLengthCreator, required } from '../Utils/Validators/validators'
import css from './Login.module.css'

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLogInThunk(formData.login, formData.pwd, formData.rememberMe);
    }
    if(props.isAuth) return <Redirect to="/profile" />
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </>
    )
}
export default connect(mapStateToProps, {getLogInThunk})(Login)

const maxLength20 = maxLengthCreator(20)
const InPut = Element('input')
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[maxLength20, required]} placeholder={'login'} name={'login'} component={InPut}/>
            </div>
            <div>
                <Field validate={[maxLength20, required]} placeholder={'pwd'} name={'pwd'} component={InPut} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember Me
            </div>
            <div className={css.error}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form : 'login'})(LoginForm)
