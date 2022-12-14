import React, { useEffect, useState } from 'react'
import './questionnaire.scss'
import { questionnaire } from '../../services/data'
import { useNavigate } from 'react-router'
import { addFormSync } from '../../redux/actions/formActions'
import { useDispatch } from 'react-redux'
import { actionFillPhoneLinesAsync } from '../../redux/actions/phoneLinesActions'
import { actionFillPlacesAsync } from '../../redux/actions/placesActions'

const Questionnaire = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [questionnaireInfo] = useState(questionnaire)
    const [value, setValue] = useState(0)
    const { question, options } = questionnaireInfo[value]
    const [responses, setResponses] = useState([])

    useEffect(() => {
        dispatch(actionFillPhoneLinesAsync())
        dispatch(actionFillPlacesAsync())
      }, [dispatch])

    const handleSelect = (response) => {
        setResponses(
            [   ...responses,
                response
            ]
        )
        if(value <4) {
            setValue(value+1)
        }else {
            setValue(4)
        }
        console.log(responses)
        if(value === 4) {
            handleSetForm(response)
        }
    }
    const handleSetForm = (resp) => {
        const tempForm = [
            ...responses,
            resp
        ]
        console.log(tempForm)
        dispatch(addFormSync([tempForm]))
        setResponses([])
        localStorage.setItem('form', JSON.stringify(tempForm))
        navigate('/home')
    }
    
  return (
    <div className='body'>
        <main className='mainQuestionnaire'>
            <section className='mainQuestionnaire__content'>
                <h1>{question}</h1>
                <div className='mainQuestionnaire__optionsContainer'>
                    {
                        Object.values(options).map((option, index) => (
                            <button onClick={()=>{handleSelect(option)}} key={index}>{option}</button>
                        ))
                    }
                </div>
            </section>
            <div className='mainQuestionnaire__circlesGroup'>
                <div className={value === 0 ? 'mainQuestionnaire__currentQuestion' : 'mainQuestionnaire__questionCircle'}></div>
                <div className={value === 1 ? 'mainQuestionnaire__currentQuestion' : 'mainQuestionnaire__questionCircle'}></div>
                <div className={value === 2 ? 'mainQuestionnaire__currentQuestion' : 'mainQuestionnaire__questionCircle'}></div>
                <div className={value === 3 ? 'mainQuestionnaire__currentQuestion' : 'mainQuestionnaire__questionCircle'}></div>
                <div className={value === 4 ? 'mainQuestionnaire__currentQuestion' : 'mainQuestionnaire__questionCircle'}></div>
            </div>
        </main>
    </div>
  )
}

export default Questionnaire