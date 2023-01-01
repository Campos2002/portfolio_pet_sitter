import './header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me.png'
import LOGO from '../../assets/logo2.png'

const Header = () => {
  return (
    <div>
      <header id='home'>

        <div className="container header__container">

          {/* <div className="logo">
            <img src={LOGO} alt="me" />
          </div> */}

          <h5>Olá! Eu sou</h5>
          <h1>Flavia Degani</h1>
          <h5 className="text-light">Pet Sitter & Comportamentalista Felina</h5>
          <CTA />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>

        </div>

      </header>
    </div>
  )
};

export default Header