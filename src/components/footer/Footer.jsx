import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className='footer__logo'>FLAVIA DEGANI</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/guilherme.campos.1991" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/eu.guicampos/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/guilhermecp/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer;