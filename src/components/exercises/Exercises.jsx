import React from 'react'
import NavBar from '../navbar/Navbar'
import mentalExercisesImage from '../../assets/images/mentalExirciseImage.png'
import exerciseOneImage from '../../assets/images/exerciseOneImage.png'
import exerciseTwoImage from '../../assets/images/exerciseTwoImage.png'
import exerciseThreeImage from '../../assets/images/exerciseThreeImage.png'
import breathImage from '../../assets/images/breathImage.png'
import arrowsCircle from '../../assets/images/arrowsCircle.png'
import breathIconImage from '../../assets/images/breathIconImage.png'
import logo from '../../assets/images/logoImageWhite.png'
import './exercises.scss'
import { Link } from 'react-scroll'

const Exercises = () => {

  return (
    <div className='bodyExercises'>
        <NavBar />
        <header className='headerExercises'>
            <div className='headerExercises__navSection'></div>
            <section className='headerExercises__section container'>
              <h2>Mejora tus habilidades psicológicas y autorregula las emociones</h2>
              <img src={mentalExercisesImage} alt="Mental heath image" />
            </section>
            <Link className='headerExercises__exConButton' to="mainExercises__ex1" spy={true} smooth={true} offset={50} duration={600}>Ejercicios<br/>concentración</Link>
            <Link className='headerExercises__exResButton' to="mainExercises__breathTechniques" spy={true} smooth={true} offset={50} duration={600}>Ejercicios<br/>respiración</Link>
        </header>
        <main className='mainExercises'>
          <section className='mainExercises__pautas'>
            <div className='mainExercises__pautasContainer container'>
              <h2>Pautas</h2>
              <div className='mainExercises__pautasInfo'>
                <div>
                  <p>➢</p>
                  <p>Se recomienda realizar estos ejercicios con una intensidad entre 5 y 8 minutos al día, o cada día de por medio.</p>
                </div>
                <div>
                  <p>➢</p>
                  <p>Es importante realizar respiración de relajación antes, para centrar la atención.</p>
                </div>
                <div>
                  <p>➢</p>
                  <p>Se aconseja poder tener un espacio de descanso después del ejercicio, debido a que conlleva fatiga mental. </p>
                </div>
                <div>
                  <p>➢</p>
                  <p>Solo un ejercicio por día. Se puede hacer el mismo durante días consecutivos.</p>
                </div>
              </div>
            </div>
          </section>
          <section className='mainExercises__ex1' id='mainExercises__ex1'>
            <div className='mainExercises__ex1Container container'>
              <figure>
                <img src={exerciseOneImage} alt="Exercise image" />
                <div>1</div>
              </figure>
              <div className='mainExercises__ex1Info'>
                <h3>Materiales</h3>
                <div className='mainExercises__ex1Materials'>
                  <div className='mainExercises__ex1List'>
                    <p>• Llave</p>
                    <p>• Cuerda</p>
                  </div>
                  <div className='mainExercises__ex1MaterialsDescription'>
                    <p>El tamaño de la cuerda es la distancia desde un extremo, agarrado con el índice y el pulgar, hasta el codo.</p>
                  </div>
                </div>
                <h3>Instrucciones</h3>
                <p>Se inserta la cuerda en la llave, y se emparejan los extremos. Dichos extremos, se van a sostener con ambos pulgares, sin ejercer mucha presión. Se debe sentar cómodamente, de manera que pueda reposar los codos en alguna superficie.</p>
                <p>A continuación, va a visualizar la llave moviéndose en círculos hacia un lado, hacia el otro, balanceándose hacia delante y hacia atrás. La llave debe moverse acorde a la visualización, esto sin mover los brazos.</p>
              </div>
            </div>
          </section>
          <section className='mainExercises__ex2'>
            <div className='mainExercises__ex2Container container'>
              <div className='mainExercises__ex2Info'>
                <h3>Materials</h3>
                <div className='mainExercises__ex2Materials'>
                  <p>• Pelota de ping pong</p>
                </div>
                <h3>Instrucciones</h3>
                <p>Acostarse boca abajo, y ubicar en frente la pelota. La distancia debe ser la de ambas manos tocándose una tras otra, iniciando desde la nariz.</p>
                <p>Debe visualizar la pelota dando una vuelta, y mantener esa visualización como si en realidad fuera a pasar.</p>
              </div>
              <figure>
                <img src={exerciseTwoImage} alt="Exercise image" />
                <div>2</div>
              </figure>
            </div>
          </section>
          <section className='mainExercises__ex3'>
            <div className='mainExercises__ex3Container container'>
              <figure>
                <img src={exerciseThreeImage} alt="Exercise image" />
                <div>3</div>
              </figure>
              <div className='mainExercises__ex3Info'>
                <h3>Materiales</h3>
                <div className='mainExercises__ex3Materials'>
                  <p>• Baraja de cartas</p>
                  <p>• Lápiz o lapicero</p>
                  <p>• Hoja</p>
                </div>
                <h3>Instrucciones</h3>
                <p>Observar una carta por el lado del revés, intentando ver a través de ella cuál es el número y el símbolo (trébol, pica, diamante, corazón). Al lograr ver un número y símbolo, anotarlo en una hoja, luego voltear la carta y comprobar si coincidió. Escribir en la hoja el resultado (puede ser con o sí – no, etc).</p>
                <p>Repetir con la cantidad de cartas que se quiera.</p>
              </div>
            </div>
          </section>
          <section className='mainExercises__breathTechniques' id='mainExercises__breathTechniques'>
            <div className='mainExercises__breathTechniquesContainer container'>
              <h2>Técnicas de respiración</h2>
              <img src={breathImage} alt="Breath image" />
            </div>
          </section>
          <section className='mainExercises__breathEx'>
            <div className='mainExercises__breathEx1 container'>
              <div className='mainExercises__breathEx1Image'>
                <h3>Relajación</h3>
                <p>5" Inhalación por la nariz</p>
                <p>5" Sostenimiento</p>
                <p>6" Exhalación por la nariz</p>
                <img src={arrowsCircle} alt="Arrows circle" />
              </div>
              <div className='mainExercises__breathEx1Info'>
                <h3>Secuencia de entrenamiento</h3>
                <div className='mainExercises__breathEx1Texts'>
                  <p>Practicar en posición de sentado o, en caso necesario, reclinado o estirado.</p>
                  <p>Practica de pie en una situación tranquila sin hacer nada</p>
                  <p>Practica de pie haciendo alguna actividad</p>
                  <p>Practica en situaciones en las que tenga sensaciones de activación</p>
                </div>
              </div>
            </div>
            <div className='mainExercises__howToStart container'>
              <div>
                <h3>¿Cómo empezar a practicarlo?</h3>
                <p>Sentarse cómodamente, cerrar los ojos y colocar una mano sobre el abdomen, con el dedo meñique justo encima del ombligo. El abdomen debe elevarse con cada inspiración. Al espirar, el abdomen vuelve a su posición original. Puede ser de ayuda intentar presionar el "cinturón" con el abdomen al inspirar. Si no puede respirar diafragmáticamente en posición sentado, puede comenzar tumbado boca arriba. Si es necesario, puede colocar un pequeño libro sobre su abdomen y comprobar cómo sube y baja.</p>
              </div>
            </div>
            <div className='mainExercises__breathEx2 container'>
              <div className='mainExercises__breathEx2Info'>
                <img src={breathIconImage} alt="Wind image" />
                <p>Visualiza fuego que nace en el coxis y sube por la espalda, expulsándolo con la exhalación.</p>
              </div>
              <div className='mainExercises__breathEx2Image'>
                <h3>Activación</h3>
                <p>5" Inhalación por la nariz</p>
                <p>3" Sostenimiento</p>
                <p>2" Exhalación fuerte<br/>por la boca</p>
                <img src={arrowsCircle} alt="Arrows circle" />
              </div>
            </div>
          </section>
        </main>
        <footer>
        <div className='footer'>
          <div className='footer__content'>
            <img src={logo} className='footer__logo' />
            <p>Ruta Mental</p>
          </div>
          <div>
          <p>La vía para cuidar tu salud mental y superar las dificultades.</p>
          </div>
          <div>
            <p>Colombia, 2022</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Exercises