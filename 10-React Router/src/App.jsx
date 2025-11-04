import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App