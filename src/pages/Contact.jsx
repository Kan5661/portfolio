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
        <div>
            <div className="Call2Action">
                <h2>
                    Lets connect!
                </h2>
                <p>
                    Want to work together and built awesome projects? Sent a message!  Any constructive criticisms are also welcome, Sent a message! Just want to say hi? <span className='ImGoinCrazy'>SENT ME A MESSAGE!</span>
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
                </form>
            </div>
        </div>
    )
}

export default Contact