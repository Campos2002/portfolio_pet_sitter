import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>Especialidades</h5>
      <h2>Certificados</h2>

      {/* Inicio do Frontend */}
      <div className="container experience__container">

        <div className="experience__content">

          <artcile className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Análise Comportamental<br />de Felinos Domésticos</h4>
              <small className='text-light'>Valéria Zukauskas - Gatos no Divã</small>
            </div>
          </artcile>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Pet Sitter e Dog Walker</h4>
              <small className='text-light'>PetAnjo</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Auxiliar Veterinária</h4>
              <small className='text-light'>Paixão Treinamentos</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Cat Sitter Profissional</h4>
              <small className='text-light'>Cat Sitter de Sucesso</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Socorrista Pet</h4>
              <small className='text-light'>Smart Centro de Ensino Pet</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Como Cuidar de Gatos</h4>
              <small className='text-light'>Alexandre Rossi</small>
            </div>
          </article>

        </div>

      </div>

    </section>
  )
}

export default Experience;