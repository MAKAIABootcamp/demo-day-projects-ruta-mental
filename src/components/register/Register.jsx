import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import logoImage from '../../assets/images/logoImage.png'
import './register.scss'
import { userRegisterAsync } from '../../redux/actions/userAction';

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const buttonNavigate = (direction) => {
        navigate(`/${direction}`)
    }

    // const { error } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        if (data.password1 === data.password2) {
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password1,
            };
            dispatch(userRegisterAsync(newUser));
            // if (error) {
            //     Swal.fire(
            //         'Ups',
            //         'Hubo un error. Intenta nuevamente',
            //         'error'
            //       ) 
            //     } else {
            //     Swal.fire(
            //         '',
            //         'Usuario creado con éxito',
            //         'success'
            //       )            }
            console.log(data);
        }
    };
    const ValidatePass = (value) => {
        if (value.length < 8) {
            return "La contraseña debería contener al menos 8 caracteres";
        } else if (value.length > 16) {
            return "La contraseña debe contener menos de 16 de caracteres";
        } else {
            return true;
        }
    };
    return (
        <div className='body'>
            <div className='mainRegister'>
                <section className='mainRegister__left'>
                    <div className='mainRegister__leftTop'>
                        <figure>
                            <img src={logoImage} alt="Logo" />
                            <span>Ruta Mental</span>
                        </figure>
                    </div>
                    <div className='mainRegister__leftContent'>
                        <div className='mainRegister__leftContentTop'>
                            <h1>Regístrate</h1>
                        </div>
                        <div className='mainRegister__leftContentForm'>
                            <form onSubmit={handleSubmit(submit)}>
                                <div className='mainRegister__formInputs'>
                                    <label>
                                        <input type="text" placeholder='Nombre'
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span>El campo del nombre es requerido</span>}
                                    </label>
                                    <label>
                                        <input type="email" placeholder='Email'
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <span>El campo del email es requerido</span>}
                                    </label>
                                    <label>
                                        <input type="password" placeholder='Contraseña'
                                            {...register("password1", { validate: ValidatePass })}
                                        />
                                        {errors.password1 && <span>{errors.password1.message}</span>}
                                    </label>
                                    <label>
                                        <input type="password" placeholder='Confirmar contraseña'
                                            {...register("password2", { validate: ValidatePass })}
                                        />
                                        {errors.password2 && <span>{errors.password2.message}</span>}
                                    </label>
                                </div>
                                <button>Register</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className='mainRegister__right'>
                    <div className='mainRegister__rightContainer'>
                        <h2>¿Ya tienes cuenta?</h2>
                        <div>
                            <button className='mainRegister__registerButton' onClick={() => { buttonNavigate('login') }}>Inicia sesión</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Register