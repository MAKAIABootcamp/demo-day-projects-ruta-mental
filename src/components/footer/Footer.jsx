import React from 'react'
import logoFooter from '../../assets/images/logoImage.png'
import "./footer.scss"


const Footer = () => {
  return (
        <div className='footer'>
          <div className='footer__content'>
            <img src={logoFooter} className='footer__logo' />
            <p>Ruta Mental</p>
          </div>
          <div>
          <p>La vía para cuidar tu salud mental y superar las dificultades.</p>
          </div>
          <div>
            <p>Colombia, 2022</p>
            <a href="https://www.freepik.es/vector-gratis/ilustracion-concepto-conversacion_7118856.htm#&position=0&from_view=author%22%3EImagen"> Imagen de storyset en Freepik</a>
          </div>
        </div>
  )
}

export default Footer