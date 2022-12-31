import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0zeibzo', 'template_khe30sp', form.current, 'ZlHmA8mapwDwonfsz')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contato</h2>
      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            {/* <h5>campereira@gmail.com</h5> */}
            <a href="mailto:campereira91@gmail.com" target="_blank" rel="noreferrer">Estou esperando!</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            {/* <h5>Guilherme Campos</h5> */}
            <a href="https://m.me/guilherme.campos.1991" target="_blank" rel="noreferrer">Chama lá!</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=5521994008518" target="_blank" rel="noreferrer">Vamos conversar!</a>
          </article>
        </div>
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="form__container">
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu e-mail' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;