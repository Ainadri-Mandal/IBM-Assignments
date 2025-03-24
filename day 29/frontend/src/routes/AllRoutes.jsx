import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../pages/login';
import FourOfFour from '../pages/FourOfFour';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<FourOfFour/>}></Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes