function ProjectModal({setShowProjectModal, showProjectModal}) {
    return(
        <div className="ModalContainer" id={showProjectModal? 'showModal' : 'closeModal'}>
            <div onClick={() => setShowProjectModal(false)}>Close</div>
        </div>
    )
}

export default ProjectModal