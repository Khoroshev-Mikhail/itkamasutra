import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Profile/Content.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import {Route } from 'react-router-dom';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav state = {props.state}/>
        <div className="content">
          <Route path="/Content" 
              render={() => 
                <Content 
                  dispatch={props.dispatch}
                  state={props.state}
              />} />
          <Route path="/Dialogs" 
              render={() => 
                <DialogsContainer 
                  dispatch={props.dispatch}
                  state={props.state}
              />} />
        </div>
      </div>

  );
}

export default App;
