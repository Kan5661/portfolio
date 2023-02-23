import '../styles/Home.css'
import js from '../images/logoImages/js-badge.webp'
import css from '../images/logoImages/CSS_Badge.png'
import html from '../images/logoImages/HTML_Badge.png'
import django from '../images/logoImages/django.png'
import mongodb from '../images/logoImages/mongodb.png'
import mongoose from '../images/logoImages/mongoose.webp'
import python from '../images/logoImages/python.png'
import react from '../images/logoImages/react.png'
import flask from '../images/logoImages/flask2.png'
import { projects } from '../projects.js'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal.jsx'

function Home() {
    const [project, setProject] = useState({
        name: "",
        description: "",
        tech: [],
        thumbnail: '',
        img: [],
        repo_link: "",
        live_link: ""
    })
    const [showProjectModal, setShowProjectModal] = useState(false)

    const HandleDebug = () => {
        console.log(window)
    }

    function handleProjectOnClick(project) {
        setProject(project)
        setShowProjectModal(true)
    }

    const projectsList = projects.map(project => {
        return (
            <div className='Project' onClick={() => handleProjectOnClick(project)}>
                <div className='ProjectThumbnail' style={{backgroundImage: `url(${project.thumbnail})`}}></div>
                <div className='ProjectTitle'>{project.name}</div>
            </div>
        )

    })
    return(
        <div className="HomePage">

            <ProjectModal project={project} showProjectModal={showProjectModal} setShowProjectModal={setShowProjectModal}/>

            <div>


                <div className="Name">Kan Lin
                    <div className='NameTitle'>Software Engineer</div>
                </div>


                <div className='Technologies'>
                    <div className='SectionTitle'>Technologies</div>
                    <div className='SkillsList'>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={js}></img>
                            <p className='SkillName'>JAVASCRIPT</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={python}></img>
                            <p className='SkillName'>PYTHON</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={react}></img>
                            <p className='SkillName'>REACT.js</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={django}></img>
                            <p className='SkillName'>DJANGO</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={flask}></img>
                            <p className='SkillName'>FLASK</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={mongodb}></img>
                            <p className='SkillName'>MongoDB</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={mongoose}></img>
                            <p className='SkillName'>MONGOOSE</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={css}></img>
                            <p className='SkillName'>CSS</p>
                        </div>
                        <div className='SkillContainer'>
                            <img className='SkillImage' src={html}></img>
                            <p className='SkillName'>HTML</p>
                        </div>

                    </div>
                </div>


                <div className="Projects" id='projects'>
                    <div className="SectionTitle">Projects</div>
                    <div className="ProjectsList">
                        {projectsList}
                    </div>
                </div>

                <button className='Debug' onClick={HandleDebug}>Debug</button>

            </div>
        </div>
    )
}

export default Home