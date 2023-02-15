import '../styles/Home.css'
import js from '../images/js-badge.webp'
import css from '../images/CSS_Badge.png'
import html from '../images/HTML_Badge.png'
import django from '../images/django.png'
import mongodb from '../images/mongodb.png'
import mongoose from '../images/mongoose.webp'
import python from '../images/python.png'
import react from '../images/react.png'
import flask from '../images/flask2.png'

function Home() {
    return(
        <div className="HomePage">
            <div>
                <div className="Name">Kan Lin
                <div className='NameTitle'>Software Engineer</div>
                </div>
                <div className='Technologies'>
                    <div className='SectionTitle'>Technologies</div>
                    <div className='SkillsList'>
                        <div>
                            <img className='SkillImage' src={js}></img>
                            <p className='SkillName'>JAVASCRIPT</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={python}></img>
                            <p className='SkillName'>PYTHON</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={react}></img>
                            <p className='SkillName'>REACT.js</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={django}></img>
                            <p className='SkillName'>DJANGO</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={flask}></img>
                            <p className='SkillName'>FLASK</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={mongodb}></img>
                            <p className='SkillName'>MongoDB</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={mongoose}></img>
                            <p className='SkillName'>MONGOOSE</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={css}></img>
                            <p className='SkillName'>CSS</p>
                        </div>
                        <div>
                            <img className='SkillImage' src={html}></img>
                            <p className='SkillName'>HTML</p>
                        </div>

                    </div>
                </div>
                <div className="Projects">
                    <div className="SectionTitle">Projects</div>
                    <div className="ProjectsList">
                        <div className='Project'></div>
                        <div className='Project'></div>
                        <div className='Project'></div>
                        <div className='Project'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home