import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
 
function Nav() {
    const [currentPath, setCurrentPath] = useState('')
    const ProjectAnchor = () => {
        if (window.location.pathname == '/') document.getElementById('projects').scrollIntoView()
    }
    return(
        <div className="Nav" id='Nav'>
            <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='Home'>Home</Link>
            <div className='empty'></div>
            <Link to='/' className='Work' onClick={ProjectAnchor}>Projects</Link>
            <Link to='About' className='About'>About</Link>
            <Link to='/Contact' className='Contact'>Contact</Link>
        </div>
    )
}

export default Nav