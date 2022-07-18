import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Muhammed Hashir</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://m.facebook.com/hashir.aachi.54" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/muhammed_hashir___/" target='_blank'><FaInstagramSquare/></a>
        <a href="https://twitter.com/hashiraachi1" target='_blank'><FaTwitterSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Muhammed Hashir K K. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer