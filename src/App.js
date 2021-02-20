import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Profile/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friendBar = {props.state.friends.friendsData}/>
        <div className="content">
          <Route path="/Content" 
            render={() => <Content 
              postData={props.state.posts.postData} />} />
          <Route path="/Dialogs" 
            render={() => <Dialogs 
              dialogsData={props.state.messages.dialogsData} 
              messagesData={props.state.messages.messagesData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
