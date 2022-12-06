import React from 'react'
import { useNavigate } from 'react-router'
import ilustration1 from '../../assets/images/ilustracion1.png'
import './firstPage.scss'

const FirstPage = () => {
    const navigate = useNavigate()

    const handleNavigate = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <main className='mainFirstPage'>
            <section className='mainFirstPage__sectionLeft'>
                <img src={ilustration1} alt="Ilustration" />
            </section>
            <section className='mainFirstPage__sectionRight'>
                <article>
                    <h1>Cuentanos un poco sobre ti</h1>
                    <div className='mainFirstPage__text'>
                        <p>Responde algunas preguntas para conocerte mejor.</p>
                        <button onClick={()=>{handleNavigate('questionnaire')}}>Continuar</button>
                    </div>
                </article>
            </section>
        </main>
    </div>
  )
}

export default FirstPage