import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'




function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_el1nhp1', 'template_9dtg3rc', form.current, 'rxWGmO450P8ypkpbQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className='FormContainer'>
            <form className='Form' ref={form} onSubmit={sendEmail}>
                <label className='Label'>Name</label>
                <input className='Input' type="text" name="user_name" />
                <label className='Label'>Email</label>
                <input className='Input' type="email" name="user_email" />
                <label className='Label'>Message</label>
                <textarea className='MessageInput' name="message" />
                <input className='EmailSubmit' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact