import '../styles/Home.css'
import js from '../images/js-badge.webp'
import css from '../images/CSS_Badge.png'
import html from '../images/HTML_Badge.png'
import django from '../images/django.png'
import mongodb from '../images/mongodb.png'
import mongoose from '../images/mongoose.webp'
import python from '../images/python.png'
import react from '../images/react.png'
import flask from '../images/flask.jpeg'

function Home() {
    return(
        <div className="HomePage">
            <div>
                <div className="Name">Kan Lin
                <div className='NameTitle'>Software Engineer</div>
                </div>
                <div className='Technologies'>
                    <div>Technologies</div>
                    <div className='SkillsList'>
                        <img className='SkillImage' src={js}></img>
                        <img className='SkillImage' src={css}></img>
                        <img className='SkillImage' src={html}></img>
                        <img className='SkillImage' src={django}></img>
                        <img className='SkillImage' src={mongodb}></img>
                        <img className='SkillImage' src={mongoose}></img>
                        <img className='SkillImage' src={react}></img>
                        <img className='SkillImage' src={flask}></img>
                        <img className='SkillImage' src={python}></img>
                    </div>
                </div>
                <div className="Projects">Projects</div>
            </div>
        </div>
    )
}

export default Home