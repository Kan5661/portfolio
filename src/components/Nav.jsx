import '../styles/Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
 
function Nav() {
    const Navigate = useNavigate()
    const [currentPath, setCurrentPath] = useState('')
    const ProjectAnchor = async () => {
        // if (window.location.pathname == '/') document.getElementById('projects').scrollIntoView()
        await Navigate('/')
        document.getElementById('projects').scrollIntoView()
    }
    return(
        <div className="Nav" id='Nav'>
            <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='Home'>Home</Link>
            <div className='empty'></div>
            <div className='Work' onClick={ProjectAnchor}>Projects</div>
            <Link to='About' className='About'>About</Link>
            <Link to='/Contact' className='Contact'>Contact</Link>
        </div>
    )
}

export default Nav