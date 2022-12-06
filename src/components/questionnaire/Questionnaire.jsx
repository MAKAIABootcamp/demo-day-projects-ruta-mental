import React, { useEffect, useState } from 'react'
import './questionnaire.scss'
import { questionnaire } from '../../services/data'
import { useNavigate } from 'react-router'
import { addFormSync } from '../../redux/actions/formActions'
import { useDispatch } from 'react-redux'

const Questionnaire = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [questionnaireInfo] = useState(questionnaire)
    const [value, setValue] = useState(0)
    const { question, options } = questionnaireInfo[value]
    const [responses, setResponses] = useState([])

    const handleSelect = (response) => {
        setResponses(
            [   ...responses,
                response
            ]
        )
        setValue(value+1)
        if(value === 4) {
            setValue(0)
            console.log(responses)
            dispatch(addFormSync([...responses]))
            setResponses([])
            navigate('/home')
        }
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