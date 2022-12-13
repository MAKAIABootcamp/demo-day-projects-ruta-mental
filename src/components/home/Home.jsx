import React, { useEffect,useState } from 'react'
import axios from "axios"

import './style.scss'
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
import { addFormSync } from '../../redux/actions/formActions'
import Navbar from '../navbar/Navbar'
import { category } from '../../services/data'
import Footer from '../footer/Footer'
import Pareja from '../infoProblems/Pareja'
import Familiar from '../infoProblems/Familiar'
import Academico from '../infoProblems/Academico'
import Social from '../infoProblems/Social'
import Fisico from '../infoProblems/Fisico'

const Home = () => {
  const apiKey = 'AIzaSyD6PZyuQRcFcGpMQNZptnHLaE31CaIEkTM'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userStore);
  const { phoneLines } = useSelector((store) => store.phoneLinesStore);
  const { places } = useSelector((store) => store.placesStore);
  const { form } = useSelector((store) => store.formStore);
  const [locations, setLocations] = useState({})
  const [ubication, setUbication] = useState([])
  const [placesF, setPlaces] = useState([])
  const [problemComponent, setProblemComponent] = useState(undefined)
  const [isSuicProblem, setIsSuicProblem] = useState(false)
  const [formResponses, setFormResponses] = useState(form)
  useEffect(() => {
    getUserLocation()
    dispatch(actionFillPhoneLinesAsync())
    dispatch(actionFillPlacesAsync())
    console.log(user)
    console.log(phoneLines)
    console.log(places)
  }, [dispatch])
  useEffect(() => {
    console.log(form)
    const tempFormResponses = JSON.parse(localStorage.getItem('form'))
    console.log(tempFormResponses)
    dispatch(addFormSync([tempFormResponses]))
    setFormResponses([tempFormResponses])
    console.log(tempFormResponses)
    filterInfoProblem(tempFormResponses)
  }, [dispatch])

  const filterInfoProblem = (tempFormResponses) => {
    const problemType = tempFormResponses[2]
    console.log(tempFormResponses)
    console.log(tempFormResponses[2])
    // const problemType = 'Familiar (Conflictos, maltrato, abuso)'
    let tempSuicResponse
    let tempProblem
    console.log(problemType)
    switch (problemType) {
      case 'Familiar (Conflictos, maltrato, abuso)':
        tempProblem = ('Familiar')
        break
      case 'Pareja (Ruptura, conflictos, duelo)':
        tempProblem = ('Pareja')
        break
      case 'Académico (Bajo rendimiento, perdida de año o semestre)':
        tempProblem = ('Academico')
        break
      case 'Social (Introversión, adaptación, cultural, bullying)':
        tempProblem = ('Social')
        break
      case 'Físico (Enfermedad, autoestima)':
        tempProblem = ('Fisico')
        break
    }
    const suicResponse = tempFormResponses[3] 
    // const suicResponse = 'He pensado en el suicidio'
    if (suicResponse == 'He pensado en el suicidio' || suicResponse == 'He pensado y lo he intentado o planeado' || suicResponse == 'Me he autolesionado') {
      tempSuicResponse = true
    } else {
      tempSuicResponse = false
    }
    console.log(tempProblem)
    console.log(tempSuicResponse)
    setIsSuicProblem(tempSuicResponse)
    setProblemComponent(tempProblem)
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position)
            let { data } = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false" + "&key=" + apiKey)
            console.log(data)
        
            let location = data.results[0].address_components
            
          const tempLocations = location.find((element)=>{return element.long_name == "Carepa" || element.long_name == "Medellín" ||  element.long_name =="Marinilla"})
          console.log(tempLocations.long_name)
            setLocations(tempLocations.long_name)
            console.log(locations)
            console.log(location)
            console.log(places[0].placeLocation)
            const filtrado = phoneLines.filter((item) => item.lineLocation.toLowerCase().includes(tempLocations.long_name.toLowerCase()) );
          const filtradoPlaces = places.filter((item) => item.placeLocation.toLowerCase().includes(tempLocations.long_name.toLowerCase()));
         
          console.log(filtrado)
          setUbication(filtrado)
setPlaces(filtradoPlaces)
          console.log(ubication)

        })
    }
}


const cambio =( ubi)=>{
  const filtrado = phoneLines.filter((item) =>
  item.lineLocation.toLowerCase().includes(ubi.toLowerCase()))
  console.log(filtrado)
  setUbication(filtrado)
  setLocations(ubi)
  console.log(ubication)
}
  const handleNavigate = (direction) => {
    navigate(`/${direction}`)
  }
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
  return (
    <div className='bodyHome'>
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
              <div className='mainHome__selectContainer'>
              <select  value={locations} onChange={ (event) =>  cambio(event.target.value)  }>
                {
                  category.map((element, index)=>(
                    <option key={index} >{element.label}</option>
                  ))               
                }
              </select>
              </div>
              <div className='mainHome__phoneLinesContainer'>
             
              {
                    ubication.map((element, index)=>{
                  
                      if(element.linea1 && !element.linea2 && !element.linea3 && !element.linea4){
                 
                       return <article key={index}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p><span>{element.linea1.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>{element.linea1.hour}</p>
                  </div>               
                </article>
               
              }if(element.linea1 && element.linea2 && !element.linea3 && !element.linea4){
                return <> <article key={index}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p><span>{element.linea1.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>{element.linea1.hour}</p>
                  </div>
                </article>

                <article key={index+1}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea2.name}</h4>
                    <p>Número: <span>{element.linea2.phone}</span></p>
                    <p><span>{element.linea2.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea2.description}</p>
                    <p>{element.linea2.hour}</p>
                  </div>               
                </article>
                </>

              }if(element.linea1 && element.linea2 && element.linea3 && !element.linea4){
                return <> <article key={index}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p><span>{element.linea1.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>{element.linea1.hour}</p>
                  </div>                                 
                </article>

                <article key={index+1}>
                  <img src={phoneIcon} alt="Phone icon" />              
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea2.name}</h4>
                    <p>Número: <span>{element.linea2.phone}</span></p>
                    <p><span>{element.linea2.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea2.description}</p>
                    <p>{element.linea2.hour}</p>
                  </div>                
                </article>

                <article key={index+2}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea3.name}</h4>
                    <p>Número: <span>{element.linea3.phone}</span></p>
                    <p><span>{element.linea3.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea3.description}</p>
                    <p>{element.linea3.hour}</p>
                  </div>
                </article>
                </>
              }else{
                return <> <article key={index}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea1.name}</h4>
                    <p>Número: <span>{element.linea1.phone}</span></p>
                    <p><span>{element.linea1.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea1.description}</p>
                    <p>{element.linea1.hour}</p>
                  </div>               
                </article>

                <article key={index+1}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea2.name}</h4>
                    <p>Número: <span>{element.linea2.phone}</span></p>
                    <p><span>{element.linea2.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea2.description}</p>
                    <p>{element.linea2.hour}</p>
                  </div>               
                </article>

                <article key={index+2}>
                  <img src={phoneIcon} alt="Phone icon" />
                
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea3.name}</h4>
                    <p>Número: <span>{element.linea3.phone}</span></p>
                    <p><span>{element.linea3.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea3.description}</p>
                    <p>{element.linea3.hour}</p>
                  </div>
                </article>

                <article key={index+3}>
                  <img src={phoneIcon} alt="Phone icon" />               
                      <div className='mainHome__phoneLineInfo' >
                    <h4>{element.linea4.name}</h4>
                    <p>Número: <span>{element.linea4.phone}</span></p>
                    <p><span>{element.linea4.phone2}</span></p>
                    <p className='mainHome__phoneLineDescription'>{element.linea4.description}</p>
                    <p>{element.linea4.hour}</p>
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
            {
              placesF.map((element, index)=>{
                if(element.lugar1 && !element.lugar2){

               return <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar1.name}</h4>
                <p>{element.lugar1.address}.</p>
                <p>{element.lugar1.hour}</p>
                <p>{element.lugar1.phone}</p>
              </article>
            }if(element.lugar1 && element.lugar2 && !element.lugar3){
              return <> <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar1.name}</h4>
                <p>{element.lugar1.address}.</p>
                <p>{element.lugar1.hour}</p>
                <p>{element.lugar1.phone}</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar2.name}</h4>
                <p>{element.lugar2.address}.</p>
                <p>{element.lugar2.hour}</p>
                <p>{element.lugar2.phone}</p>
              </article>
              </> }
              else{
                return <> <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar1.name}</h4>
                <p>{element.lugar1.address}.</p>
                <p>{element.lugar1.hour}</p>
                <p>{element.lugar1.phone}</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar2.name}</h4>
                <p>{element.lugar2.address}.</p>
                <p>{element.lugar2.hour}</p>
                <p>{element.lugar2.phone}</p>
              </article>
              <article>
                <img src={locationIcon} alt="Icon location" />
                <h4>{element.lugar3.name}</h4>
                <p>{element.lugar3.address}.</p>
                <p>{element.lugar3.hour}</p>
                <p>{element.lugar3.phone}</p>
              </article>
              </>
              }
            })
            }
           
            </div>
          </div>
        </section>
        {
          isSuicProblem ?
          (
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
          ): <div></div>
        }
        {
          problemComponent == 'Pareja' ?
          (
            <Pareja/>
          ): <div></div>
        }
        {
          problemComponent == 'Familiar' ?
          (
            <Familiar/>
          ): <div></div>
        }
        {
          problemComponent == 'Academico' ?
          (
            <Academico/>
          ): <div></div>
        }
        {
          problemComponent == 'Social' ?
          (
            <Social/>
          ): <div></div>
        }
        {
          problemComponent == 'Fisico' ?
          (
            <Fisico/>
          ): <div></div>
        }
        
        <Footer/>
      </main>
    </div>
  )
}

export default Home