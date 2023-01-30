import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Project from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Project />}/>
      </Routes>
    </div>
  );
}

export default App;
