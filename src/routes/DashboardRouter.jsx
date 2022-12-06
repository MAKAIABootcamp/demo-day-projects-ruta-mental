import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from '../components/firstPage/FirstPage'
import Main from '../components/Main'
import Questionnaire from '../components/questionnaire/Questionnaire'

const DashboardRouter = () => {
  return (
    <Routes>
        <Route path="pageOne" element={<FirstPage />} />
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path='home' element={<Main />} />
    </Routes>
  )
}

export default DashboardRouter