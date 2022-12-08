import React from 'react'
import './style.scss'
import logo from '../../assets/images/logo.png'
import fondo from '../../assets/images/fondo.png'
import { useNavigate } from 'react-router'
import { actionLogoutAsync } from '../../redux/actions/userAction'
import { useDispatch } from 'react-redux'
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNavigate = (direction) => {
    navigate(`/${direction}`)
  }
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
  return (
    <div>
      <header>
        <nav className='navbar'>
          <div className='navbar__iconos'>
            <img src={logo} className='navbar__logo' />
            <p>Ruta Mental</p>
          </div>
          <div className='navbar__links'>
            <p>Home</p>
            <p>Information</p>
            <p>Exercises</p>
            <button onClick={logOut}>Logout</button>
          </div>
        </nav>
        <img src={fondo} className='imgFondo' />
        <div className='header__frase'>NO<br/>ESTÁS<br/>SOLO</div>
        <div className='header__circulo'>
          <div className='header__circulo__sombra'></div>

          ¿Necesitas ayuda?
        </div>
        <div className='header__text'>Aprende cómo mantenerte seguro, superar una crisis y encontrar tratamiento.</div>
      </header>
      <div className='main'>
    <h2 className='main__text'>Si estás en una situación que afecte tu bienestar emocional...</h2>
    <h2 className='main__text'>Desde cualquier ciudad del país marca 192, opción 4. Línea del Ministerio de Salud.</h2>
    <h2 className='main__text'>Si resides en Antioquia, llama gratis a estas líneas: </h2>
    <h2>01 8000 413 838</h2>
    <h2>Salud para el alma (604) 440 76 49</h2>
      </div>
    </div>
  )
}

export default Home