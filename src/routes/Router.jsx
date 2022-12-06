import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from '../components/firstPage/FirstPage';
import Login from '../components/login/Login';
import Main from '../components/Main';
import Questionnaire from '../components/questionnaire/Questionnaire';
import Register from '../components/register/Register';
import { auth } from '../firebase/firebaseConfig';
import { loginSync } from '../redux/actions/userAction';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const [check, setCheck] = useState(true);
    const userStore = useSelector((store) => store.userStore);
    const dispatch = useDispatch()
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user?.uid) {
          setIsLoggedIn(true);
          if (Object.entries(userStore).length === 0) {
            const {
              displayName,
              email,
              accessToken,
              uid,
            } = user.auth.currentUser;
            dispatch(
              loginSync({
                name: displayName,
                email,
                accessToken,
                uid,
                error: false,
              })
            );
          }
        } else {
          setIsLoggedIn(false);
        }
        setCheck(false)
  
      }
  
      );
    }, [setIsLoggedIn, dispatch, userStore]);
  
    if (check) {
      return (
          <span>Loading...</span>
      );
    }
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>
                <Route element={<PrivateRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/*' element={<DashboardRouter />} />
            </Route>
            {/* <Route path='*' element={<NoMatch/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router