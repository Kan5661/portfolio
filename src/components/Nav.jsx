import '../styles/Nav.css'
import { Link } from 'react-router-dom'
 
function Nav() {
    return(
        <div className="Nav" id='Nav'>
            <a href='/#App' className='Home'>Home</a>
            <div className='empty'></div>
            <a href='/#projects' className='Work'>Work</a>
            <Link to='About' className='About'>About</Link>
            <Link to='/Contact' className='Contact'>Contact</Link>
        </div>
    )
}

export default Nav