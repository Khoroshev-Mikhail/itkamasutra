import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Profile/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="content">
        {/*<Content />*/} <Dialogs />
      </div>
    </div>
  );
}

export default App;
