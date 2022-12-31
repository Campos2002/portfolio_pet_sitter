import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="https://www.linkedin.com/in/guilhermecp/" className='btn'>LinkedIn</a>
      <a href="https://github.com/Campos2002" className='btn'>GitHub</a>
      <a href="#contact" className='btn'>Contato</a>
    </div>
  )
}

export default CTA