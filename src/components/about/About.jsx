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
            Olá, recrutador! Tudo bem? Me chamo Guilherme Campos, sou graduando em Ciência da Computação e estudante de Front-end. Este portfólio possui o intuito de mostrar tudo que venho aprendendo ao longo de 1 ano de estudos. A página é construída em ReactJS, HTML e CSS com renderização dinâmica de componentes em algumas seções. A responsividade funciona por meio de Media Queries. Também foram utilizadas bibliotecas externas como a React Icons para ícones, Email JS para serviço de e-mail e Swiper para efeito carrousel. Todo projeto foi versionado através da ferramenta GIT e encontra-se disponível em repositório remoto no GitHub. Este é um projeto em andamento que estará em constante mudança, então sinta-se à vontade para revisita-lo de tempos em tempos. Se você chegou a esta página com o intuito de me contratar para algum serviço, é só escolher uma opção na seção de contato que estarei esperando sua mensagem! Até!
          </p>

          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default about;