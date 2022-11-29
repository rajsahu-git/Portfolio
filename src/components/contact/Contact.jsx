import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { SiProtonmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nvy4spz', 'template_lo7ey9e', form.current, 'ivq9-dkoZBGOianUL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rajkumarsahu8824@gmail.com</h5>
            <a href="mailto:rajkumarsahu8824@gmail.com"rel="noopener noreferrer"target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <SiProtonmail className='contact__option-icon'/>
            <h4>Proton Mail</h4>
            <h5>rajkumarsahu24@proton.me</h5>
            <a href="mailto:rajkumarsahu24@proton.me"rel="noopener noreferrer"target="_blank">Send a mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918239688824</h5>
            <a href="https://web.whatsapp.com/send?phone=+918239688824" rel="noopener noreferrer"target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact