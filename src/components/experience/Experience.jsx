import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import data from '../experience/data'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>Especialidades</h5>
      <h2>Certificados</h2>

      <div className="container experience__container">

        <div div className="experience__content">

          {
            data.map(({ certificado, emissor }, index) => (
              <artcile key={index} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{certificado}</h4>
                  <small className='text-light'>{emissor}</small>
                </div>
              </artcile>
            ))
          }

        </div>

      </div>

    </section >
  )
}

export default Experience;