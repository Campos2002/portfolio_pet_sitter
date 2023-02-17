import './header.css'
import ME from '../../assets/topo.png'
import LOGO from '../../assets/logo_header.png'

const Header = () => {
  return (
    <div>
      <header id='home'>
        <div className="container header__container">
          {/* <h5>Olá! Eu sou</h5> */}
          <div className='header__logo'>
            <img src={LOGO} alt="logo" />
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