import React, { useEffect } from 'react'
import googleLogo from '../../assets/images/googleLogo.png'
import facebookLogo from '../../assets/images/facebookLogo.png'
import logoImage from '../../assets/images/logoImage.png'
import './login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginProvider } from "../../services/data";
import { useForm } from 'react-hook-form'
import { loginAsync, loginProviderAsync } from '../../redux/actions/userAction'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.userStore);
    // const { error, displayName } = useSelector(state => state.user)

    // useEffect(() => {
    //     if (error) {
    //         Swal.fire(
    //             'Ups',
    //             'Usuario o contraseña incorrecta',
    //             'error'
    //           )          }
    //  }, [error])
     
//      useEffect(() => {
//        if (displayName) {
//          navigate('home')
//        }
//    }, [displayName])
     
     const {
       register,
       handleSubmit,
     } = useForm();
   
     const submit = (data) => {
         console.log(data);
         dispatch(loginAsync(data));
       }

       const handleLoginGoogleOrFacebook = (provider) => {
        dispatch(loginProviderAsync(provider))
      }

    const buttonNavigate = (direction) => {
        navigate(`/${direction}`)
    }

  return (
    <div className='body'>
        <div className='mainLogin'>
            <section className='mainLogin__left'>
                <div className='mainLogin__leftTop'>
                    <figure>
                        <img src={logoImage} alt="Logo" />
                        <span>Ruta Mental</span>
                    </figure>
                </div>
                <div className='mainLogin__leftContent'>
                    <div className='mainLogin__leftContentTop'>
                        <h1>Inicia Sesión</h1>
                        <p>Inicia sesión con</p>
                        <div className='mainLogin__providers'>
                            {/* <img src={googleLogo} alt="Google logo" />
                            <img src={facebookLogo} alt="Facebook logo" /> */}
                            {
                                loginProvider.map((provider, index) => (
                                    <img key={index} src={provider.image} alt={provider.name} onClick={()=>{handleLoginGoogleOrFacebook(provider.provider)}}/>
                                ))
                            }
                        </div>
                        <div className='mainLogin__linesBox'>
                            <hr/>
                            <p>o</p>
                            <hr/>
                        </div>
                    </div>
                    <div className='mainLogin__leftContentForm'>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className='mainLogin__formInputs'>
                                <input type="text" placeholder='Email'
                                {...register("email", { required: true })}
                                />
                                <input type="password" placeholder='Contraseña'
                                {...register("password", { required: true })}
                                />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className='mainLogin__right'>
                <div className='mainLogin__rightContainer'>
                    <h2>¿No tienes cuenta?</h2>
                    <div>
                        <button className='mainLogin__registerButton' onClick={()=>{buttonNavigate('register')}}>Regístrate</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login