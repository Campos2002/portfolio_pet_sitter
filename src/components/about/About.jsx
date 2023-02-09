import React from 'react'
import './about.css'
import ME from '../../assets/me4.png'
import { FaAward } from 'react-icons/fa'
import { FaUniversity } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'

const about = () => {
  return (

    <section id='about'>

      <h5>Profissional</h5>
      <h2>Sobre</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Clientes Satisfeitos</h5>
              <small>50+ Clientes</small>
            </article>

            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h5>Superior</h5>
              <small>Graduanda em Ciências Biológicas</small>
            </article>

            <article className='about__card'>
              <MdPets className='about__icon' />
              <h5>Atendimentos</h5>
              <small>600+ Completos</small>
            </article>

          </div>

          <p>
            Olá! Me chamo Flavia Degani, sou Comportamentalista de Felinos Dométicos, Enfermeira Vetinária, Pet Sitter e graduanda em Ciências Biológicas. Moro na Ilha do Governador, Rio de Janeiro. Habituada a cuidar dos meus pets (13 gatos), de amigos e parentes, identifiquei uma enorme vontade de me tornar uma profissional em cuidados e comportamento animal e para isso, buscando aumentar ainda mais os meus conhecimentos, me especializei através de certificações na área, para levar um serviço de excelência e uma experiência única não só para os animais, como para seus tutores também. Confiando seu pet aos meus cuidados, você pode ter certeza que além de toda expertise adquirada ao longo dos anos, eles receberão todo amor e carinho necessário na ausência de seus tutores.
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default about;