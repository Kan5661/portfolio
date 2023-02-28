import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'




function Contact() {
    const form = useRef();
    const [showError, setShowError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setShowError(false)
        const [SenderName, SenderEmail, SenderMessage] = [form.current[0].value, form.current[1].value, form.current[2].value]
        if (SenderName !== '' && SenderMessage !== '' && SenderEmail !== '') {
            emailjs.sendForm('service_el1nhp1', 'template_9dtg3rc', form.current, 'rxWGmO450P8ypkpbQ')
            .then((result) => {
                console.log(result.text);
                [form.current[0].value, form.current[1].value, form.current[2].value] = ['', '', '']
            }, (error) => {
                console.log(error.text);
            });
        }
        else setShowError(true)

    };

    return(
        <div>
            <div className="Call2Action">
                <h2>
                    Lets connect!
                </h2>
                <p>
                    Want to work together and built awesome projects? Sent a message!  Any constructive criticisms? Sent a message! Just want to say hi? <span className='ImGoinCrazy'>SENT ME A MESSAGE!</span>
                </p>
            </div>
            <div className='FormContainer'>
                <form className='Form' ref={form} onSubmit={sendEmail}>
                    <label className='Label'>Name</label>
                    <input className='Input' type="text" name="user_name" />
                    <label className='Label'>Email</label>
                    <input className='Input' type="email" name="user_email" />
                    <label className='Label'>Message</label>
                    <textarea className='MessageInput' name="message" />
                    <input className='EmailSubmit' type="submit" value="Send" />
                    <p className={showError? 'ErrorMsg' : 'HideElement'}>Empty Input Field</p>
                </form>
            </div>
        </div>
    )
}

export default Contact