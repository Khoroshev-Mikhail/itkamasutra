import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    //Создаём класс в котором рендерим компоненты с редиректом
        class RedirectComponent extends React.Component {
            render () {
                if(!this.props.isAuth) return <Redirect to={'/Login'} />
                return <Component {...this.props} />
            }
        }
    //В компоненты для обработки логики должны приходить одни и теже для всех пропсы (isAuth)
    //Прокидываем их из state с помощью функции connect()()
        let ConnectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    //Возвращаем класс с прокинутым state.auth.isAuth
        return ConnectedWithAuthRedirect
}