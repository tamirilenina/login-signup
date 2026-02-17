import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Signup from './pages/signup'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home Name={"Lenina"} />}/>
        <Route path="/Login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Signup' element={<Signup />} />
       </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App