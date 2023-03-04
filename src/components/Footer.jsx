import '../styles/Footer.css'
import github_logo from '../images/logoImages/GitHub_logo.png'
import twitter_logo from '../images/logoImages/twitter_logo.png'
import instagram_logo from '../images/logoImages/instagram_logo.png'
import linkedIn_logo from '../images/logoImages/linkedin-logo.png'

function Footer() {
    return(
        <div className="Footer">
            <a className='ImgLink' href={'https://github.com/Kan5661'} target='_blank'>
                <img className='FooterItem' src={github_logo}></img>
            </a>
            <a className='ImgLink' href={'https://www.linkedin.com/in/kan-lin-dev/'} target='_blank'>
                <img className='FooterItem' src={linkedIn_logo}></img>
            </a>
            
            {/* <img className='FooterItem' src={twitter_logo}></img>
            <img className='FooterItem' src={instagram_logo}></img> */}
        </div>
    )
}

export default Footer