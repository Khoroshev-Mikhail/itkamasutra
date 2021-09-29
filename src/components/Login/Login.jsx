import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </>
    )
}

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

export default Login