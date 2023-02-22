import '../styles/About.css'

function About() {
    return(
        <div className="AboutPage">
            <div className='AboutMe'>
               <h2 className='AboutTitle'>About Me</h2>
               <div>
               Hello! I'm Kan, a Software Engineer based in <span className="Span">New York, NY</span>. Over the last 3 years, I have been programming as a hobby creating games and scripts that automate simple tasks. 
                <br></br>
                <br></br>
                I have just recently graduated from <a className="Span" href='https://generalassemb.ly/' target='_blank'>General Assembly</a>, a 3 month intensive coding boot camp and learned how to create Full Stack applications from scratch to production.
               </div>
               <div className="ResumeButtons">
                    <a className='ResumeButton'>Download</a>
                    <a className='ResumeButton'>View</a>
               </div>
            </div>
        </div>
    )
}

export default About