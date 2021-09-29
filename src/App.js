import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import {Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import MyAppContainer from './components/MyApp/MyAppContainer'
import ContentContainer from './components/Profile/ContentContainer';
import Login from './components/Login/Login.jsx';

function App(props) {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav state = {props.state}/>
        <div className="content">
          <Route path="/profile/:userId?" 
            render={() => 
              <ContentContainer 
                dispatch={props.dispatch}
                state={props.state}
            />} />
          <Route path="/Dialogs" 
              render={() => 
                <DialogsContainer 
                  dispatch={props.dispatch}
                  state={props.state}
              />} />
          <Route path="/Users"
            render ={()=>
              <UsersContainer
                dispatch={props.dispatch}
                state={props.state}
            />} />
            <Route path="/MyApp"
              render ={()=>
                <MyAppContainer
                  dispatch={props.dispatch}
                  state={props.state}
              />} />
            <Route path="/Login"
              render ={()=>
                <Login 
                  dispatch={props.dispatch}
                  state={props.state}
              />} />
        </div>
      </div>

  );
}

export default App;
