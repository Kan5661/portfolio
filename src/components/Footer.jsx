import '../styles/Footer.css'
import github_log from '../images/logoImages/GitHub_logo.png'
import twitter_logo from '../images/logoImages/twitter_logo.png'
import instagram_logo from '../images/logoImages/instagram_logo.png'


function Footer() {
    return(
        <div className="Footer">
            <img className='FooterItem' src={github_log}></img>
            {/* <img className='FooterItem' src={twitter_logo}></img>
            <img className='FooterItem' src={instagram_logo}></img> */}
        </div>
    )
}

export default Footer