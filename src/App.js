import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Nav from './components/Nav.jsx';
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='Background'>
      <div className="App" id='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
