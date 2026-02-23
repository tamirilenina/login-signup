import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Signup from './pages/signup'
import Products from './pages/product'
import About from './pages/About'
import Services from './pages/Services'
import Details from './pages/Details'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home Name={"Lenina"} />}/>
        <Route path="/Login" element={<Login />} />
        <Route path='*' element={<NotFound/>} />
         <Route path='/About' element={<About />} />
         <Route path='/product' element={<Products />} />
         <Route path='/Services' element={<Services />} />
         <Route path='/Services' element={<Services />} />
        <Route path='/details/:pid' element={<Details />} />
       </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App