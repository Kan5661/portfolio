import '../styles/ProjectModal.css'

function ProjectModal({setShowProjectModal, showProjectModal}) {
    return(
        <div className="ModalContainer" id={showProjectModal? 'showModal' : 'closeModal'}>
            {/* <i class="fa-solid fa-xmark" onClick={() => setShowProjectModal(false)}></i> */}
            {/* <i class="fa-regular fa-rectangle-xmark" onClick={() => setShowProjectModal(false)}></i> */}
            <i id='closeButton' class="fa-regular fa-circle-xmark" onClick={() => setShowProjectModal(false)}></i>
        </div>
    )
}

export default ProjectModal