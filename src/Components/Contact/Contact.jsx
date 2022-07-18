import React, { useRef } from 'react';
import "./Contact.css";
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sn2dmd5', 'template_7lhpny3', form.current, '8347Yosa3IOUaXNpB')
      e.target.reset()
  };

  return (
  <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>Hashiraachi818@gmail.com</h5>
          <a href="mailto:Hashiraachi818@gmail.com" target='_blank'>Send a Message</a>
        </article>
        <article className="contact__option">
          <BsInstagram className="contact__option-icon"/>
          <h4>instagram</h4>
          <h5>muhammed_hashir___</h5>
          <a href="https://www.instagram.com/muhammed_hashir___/ target='_blank'">Send a Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>+918089462122</h5>
          <a href="https://wa.me/918089462122" target='_blank'>Send a Message</a>
        </article>
      </div>
      {/*END OF CONTACT OPTION*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name"  required/>
        <input type="email" name="email" placeholder="Your Email"  required/>
        <textarea name="Message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
)};

export default Contact;
