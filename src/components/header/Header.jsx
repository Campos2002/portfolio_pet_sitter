import './header.css'
import ME from '../../assets/me.png'
import LOGO from '../../assets/logo.png'

const Header = () => {
  return (
    <div>
      <header id='home'>
        <div className="container header__container">
          <h5>Olá! Eu sou</h5>
          <div>
            <img src={LOGO} alt="logo" className='header__logo' />
          </div>
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