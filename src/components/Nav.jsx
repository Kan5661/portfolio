import '../styles/Nav.css'
import { Link } from 'react-router-dom'
 
function Nav() {
    return(
        <div className="Nav">
            <Link to='/' className='Home'>Home</Link>
            <Link to='/Projects' className='Work'>Work</Link>
            <Link to='About' className='About'>About</Link>
            <Link to='/Contact' className='Contact'>Contact</Link>
        </div>
    )
}

export default Nav