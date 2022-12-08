import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from '../components/firstPage/FirstPage'
import Home from '../components/home/Home'
import Questionnaire from '../components/questionnaire/Questionnaire'

const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="pageOne" element={<FirstPage />} />
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path='home' element={<Home />} />
    </Routes>
  )
}

export default DashboardRouter