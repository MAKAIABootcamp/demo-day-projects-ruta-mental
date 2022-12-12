import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Exercises from '../components/exercises/Exercises'
import FirstPage from '../components/firstPage/FirstPage'
import Home from '../components/home/Home'
import Information from '../components/information/Information'
import Questionnaire from '../components/questionnaire/Questionnaire'

const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="pageOne" element={<FirstPage />} />
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path='home' element={<Home />} />
        <Route path='exercises' element={<Exercises />} />
        <Route path='information' element={<Information />} />
    </Routes>
  )
}

export default DashboardRouter