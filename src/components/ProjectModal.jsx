import '../styles/ProjectModal.css'

function ProjectModal({project, setShowProjectModal, showProjectModal}) {
    const projectImages = project.img.map(image => {
        return(
            <div 
            className='ImgPrevContainer' style={{backgroundImage: `url(${image})`}}>
                
            </div>
        )
    })   
    let skills = project.tech.map(skill => {
        return(
            skill
        )
    })
    skills = skills.join(', ')

    return(
        <div className="ModalContainer" id={showProjectModal? 'showModal' : 'closeModal'}>
            
            <i id='closeButton' class="fa-regular fa-circle-xmark" onClick={() => setShowProjectModal(false)}></i>
            
            <h1 className='ProjectName'>{project.name}</h1>
            
            <div className='ProjectImgSlider'>
                {projectImages}
            </div>
            
            <div className='ProjectInfo'>  
                <div className='ProjectInfos'>Description: <span className='DescriptionText'>{project.description}</span></div>
                <div className='ProjectInfos'>Technologies used: {skills}</div>
                <a id='Link' className={project.live_link == ''? 'HideElement' : 'ProjectInfos'} href={project.live_link} target='_blank'>Live Deployed Site</a>
                <a id='Link' className='ProjectInfos' href={project.repo_link} target='_blank'>GitHub Repo</a>
            </div>
        </div>
    )
}

export default ProjectModal