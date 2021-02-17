import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Content from './components/Content.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
