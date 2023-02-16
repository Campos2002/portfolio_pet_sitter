import React from 'react'
import './portfolio.css'
import data from '../portfolio/data.js'
import { MdPets } from 'react-icons/md'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus super satisfeitos</h5>
      <h2>Clientinhos <MdPets /></h2>

      <div className="container portfolio__container">
        {
          data.map(({ image, title }, index) => (
            <article key={index} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio;