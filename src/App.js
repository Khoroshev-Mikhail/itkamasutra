import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Profile/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route path="/Content" component={Content} />
          <Route path="/Dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
