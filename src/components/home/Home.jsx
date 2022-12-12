import React, { useEffect,useState } from 'react'
import axios from "axios"

import './style.scss'
import logo from '../../assets/images/logoImageWhite.png'
import fondo from '../../assets/images/fondo.png'
import phoneIcon from '../../assets/images/phoneIcon.png'
import illustrationCallCenter from '../../assets/images/illustrationCallCenter.png'
import locationIcon from '../../assets/images/locationIcon.png'
import { useNavigate } from 'react-router'
import { actionLogoutAsync } from '../../redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import { actionFillPhoneLinesAsync } from '../../redux/actions/phoneLinesActions'
import { actionFillPlacesAsync } from '../../redux/actions/placesActions'
import Navbar from '../navbar/Navbar'
import { getUserLocation } from '../../services/getLocation'

const Home = () => {
  const apiKey = 'AIzaSyD6PZyuQRcFcGpMQNZptnHLaE31CaIEkTM'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userStore);
  const { phoneLines } = useSelector((store) => store.phoneLinesStore);
  const { places } = useSelector((store) => store.placesStore);
  const [locations, setLocations] = useState({})
  const [ubication, setUbication] = useState([])
  useEffect(() => {

    dispatch(actionFillPhoneLinesAsync())
    dispatch(actionFillPlacesAsync())
    console.log(user)
    console.log(phoneLines)
    console.log(places)
  }, [dispatch])
  useEffect(() => {
    getUserLocation()
    // const location = getUserLocation()
    // console.log(location)
  }, [])
  const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position)
            let { data } = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false" + "&key=" + apiKey)
            console.log(data)
            const location = data.results[0].address_components[2].short_name;
           
            setLocations(location)
            console.log(location)

            const filterdPaletas = phoneLines.filter((item) =>
            item.lineLocation.toLowerCase().includes(location.toLowerCase())
          );
          console.log(filterdPaletas)
          setUbication(filterdPaletas)

          console.log(ubication)

        })
    }
}


  const handleNavigate = (direction) => {
    navigate(`/${direction}`)
  }
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
  return (
    <div>
      <header className='header'>
        <Navbar />
        <img src={fondo} className='imgFondo' />
        <div className='header__frase'>NO<br />ESTÁS<br />SOLO</div>
        <Link className='header__circulo' to="mainHome__phoneLinesBL" spy={true} smooth={true} offset={50} duration={600}>
          <div className='header__circulo__sombra'></div>
          <span id='buttonText'>¿Necesitas ayuda?</span>
          <img id='buttonArrow' src='https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png' alt="arrow down" />
        </Link>
      </header>
      <main className='mainHome'>
  
        <div className='mainHome__section1Container container' >
          <h2>Aprende cómo superar una crisis, mejorar tus habilidades psicológicas y encontrar acompañamiento.</h2>
          <section className='mainHome__phoneLinesBL' id='mainHome__phoneLinesBL'>
            <div className='mainHome__phoneLinesBLLeft'>
              <h2>¿A dónde puedo llamar?</h2>
              <h3>Líneas en tu localidad:</h3>
              <div className='mainHome__phoneLinesContainer'>
              {
                    ubication.map((element, index)=>{
                  
                      if(element.linea1 && !element.linea2 && !element.linea3){
                 
                       return <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>Atención: {element.linea1.hour}</p>
                  </div>
                   
                
                </article>
              
                
              }if(element.linea1 && element.linea2 && !element.linea3){
                return <> <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>Atención: {element.linea1.hour}</p>
                  </div>
                   
                
                </article>
                <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea2.name}</h4>
                    <p>Número: <span>{element.linea2.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea2.description}</p>
                    <p>Atención: {element.linea2.hour}</p>
                  </div>
                   
                
                </article>
                </>
              }else{
                return <> <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>Atención: {element.linea1.hour}</p>
                  </div>
                   
                
                </article>
                <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea2.name}</h4>
                    <p>Número: <span>{element.linea2.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea2.description}</p>
                    <p>Atención: {element.linea2.hour}</p>
                  </div>
                   
                
                </article>
                <article>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea3.name}</h4>
                    <p>Número: <span>{element.linea3.phone}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea3.description}</p>
                    <p>Atención: {element.linea3.hour}</p>
                  </div>
                   
                
                </article>
                </>
              }

              })
              }
                
              </div>
            </div>
          
            <div className='mainHome__phoneLinesBLRight'>
              <img src={illustrationCallCenter} alt="Illustration call center" />
            </div>
          </section>
        </div>
                    
        <section className='mainHome__nationalLines'>
          <div className='mainHome__nationalLinesContainer container'>
            <p>Desde cualquier ciudad del país marca 192, opción 4</p>
            <span>Si resides en Antioquia llama gratis a estas líneas:<br />01 8000 413 838<br />Salud para el alma (604) 440 76 49</span>
          </div>
        </section>
        <section className='mainHome__placesByLocation'>
          <div className='mainHome__placesByLocationContainer container'>
            <h2>Lugares de atención psicológica en tu localidad</h2>
            <div className='mainHome__placesContainer'>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>Comuna 1 popular - casa futuro</h4>
                <p>Carrera 42B #107B - 47 / Popular 1.</p>
                <p>Horario de atención lunes a viernes de 9am a 4pm/ sábados de 9am a 12pm.</p>
                <p>Número: 322 858 8633</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>Comuna 1 popular - casa futuro</h4>
                <p>Carrera 42B #107B - 47 / Popular 1.</p>
                <p>Horario de atención lunes a viernes de 9am a 4pm/ sábados de 9am a 12pm.</p>
                <p>Número: 322 858 8633</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>Comuna 1 popular - casa futuro</h4>
                <p>Carrera 42B #107B - 47 / Popular 1.</p>
                <p>Horario de atención lunes a viernes de 9am a 4pm/ sábados de 9am a 12pm.</p>
                <p>Número: 322 858 8633</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>Comuna 1 popular - casa futuro</h4>
                <p>Carrera 42B #107B - 47 / Popular 1.</p>
                <p>Horario de atención lunes a viernes de 9am a 4pm/ sábados de 9am a 12pm.</p>
                <p>Número: 322 858 8633</p>
              </article>
            </div>
          </div>
        </section>
        <section className='mainHome__infoSuicide'>
          <div className='mainHome__infoSuicideContainer container'>
            <h2>¿Piensas en el suicidio?</h2>
            <p>Cuando parece que no vale la pena vivir, podría parecer que la única forma de encontrar alivio es por medio del suicidio. Cuando te sientes de esta manera, puede que sea difícil de creer, pero tienes otras opciones.<br /><br />Da un paso hacia atrás y separa tus emociones de tus acciones por el momento.</p>
            <div className='mainHome__infoSuicideBoxes'>
              <p>Reconoce que la depresión y la desesperanza pueden distorsionar tus percepciones y reducir tu habilidad para tomar buenas decisiones.</p>
              <p>Date cuenta que los sentimientos suicidas son el resultado de problemas tratables y actúa como si hubiera otras opciones en lugar del suicidio, incluso si no las ves ahora mismo.</p>
              <p>Tal vez no sea fácil y puede que no te sientas mejor por la noche. Aunque, eventualmente, el sentimiento de desesperación — y los pensamientos de suicidio — desaparecerán.</p>
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

export default Home