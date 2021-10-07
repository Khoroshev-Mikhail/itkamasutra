import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import {Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import MyAppContainer from './components/MyApp/MyAppContainer'
import ContentContainer from './components/Profile/ContentContainer';
import Login from './components/Login/Login.jsx';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { authThunk } from './redux/authreducer';
import { initializeApp } from './redux/appreducer';
import Preloader from './components/Preloader/Preloader';


class App extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if(!this.props.isInitialized) {
      console.log(this.props.isInitialized)
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav state = {this.props.state}/>
        <div className="content">
          <Route path="/profile/:userId?" 
            render={() => 
              <ContentContainer 
                dispatch={this.props.dispatch}
                state={this.props.state}
            />} />
          <Route path="/Dialogs" 
              render={() => 
                <DialogsContainer 
                  dispatch={this.props.dispatch}
                  state={this.props.state}
              />} />
          <Route path="/Users"
            render ={()=>
              <UsersContainer
                dispatch={this.props.dispatch}
                state={this.props.state}
            />} />
            <Route path="/MyApp"
              render ={()=>
                <MyAppContainer
                  dispatch={this.props.dispatch}
                  state={this.props.state}
              />} />
            <Route path="/Login"
              render ={()=>
                <Login 
                  dispatch={this.props.dispatch}
                  state={this.props.state}
              />} />
        </div>
      </div>
  );
  }
}

const mstp = (state) => {
  return {
    isInitialized : state.app.initialized
  }
}

export default compose( 
    connect(mstp, {authThunk, initializeApp}), 
    withRouter
  )(App);
