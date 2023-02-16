import '../styles/ProjectModal.css'

function ProjectModal({project, setShowProjectModal, showProjectModal}) {
    const projectImages = project.img.map(image => {
        return(
            <div 
            className='ImgPrevContainer' style={{backgroundImage: `url(${image})`}}>
                
            </div>
        )
    }
)

    return(
        <div className="ModalContainer" id={showProjectModal? 'showModal' : 'closeModal'}>
            
            <i id='closeButton' class="fa-regular fa-circle-xmark" onClick={() => setShowProjectModal(false)}></i>
            
            <h1 className='ProjectName'>{project.name}</h1>
            
            <div className='ProjectImgSlider'>
                {projectImages}
            </div>
            
            <div className='ProjectInfo'>  
                <div>Description</div>
                <div>Tech</div>
                <a>Live Deployed Site</a>
                <a>GitHub Repo</a>
            </div>
        </div>
    )
}

export default ProjectModal