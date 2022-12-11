import React from 'react'
import { useDispatch } from 'react-redux';
import { actionLogoutAsync } from '../../redux/actions/userAction';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../../assets/images/logoImageWhite.png'
import './navbar.scss'

const NavBar = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(actionLogoutAsync());
      };

      const CustomLink = ({to, children, ...props}) => {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <Link className={isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} to={to} {...props}>
                {children}
            </Link>
        )
      }
  return (
    <nav className='navbar'>
    <div className='navbar__iconos'>
      <img src={logo} className='navbar__logo' />
      <p>Ruta Mental</p>
    </div>
    <div className='navbar__links'>
      <CustomLink to='/home'>Inicio</CustomLink>
      <CustomLink to='/information'>Información</CustomLink>
      <CustomLink to='/exercises'>Ejercicios</CustomLink>
      <button onClick={logOut}>Cerrar Sesión</button>
    </div>
  </nav>
  )
}

export default NavBar