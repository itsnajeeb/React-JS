import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import { Navbar } from './components/Navbar'
import './app.css'
import Footer from './components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Men from './Pages/men'
import Women from './Pages/women'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>Home</Route>
        <Route path='/contact' element={<Contact />}>Home</Route>
        <Route path='/product' element={<Product />}>Home</Route>
        <Route path='*' element={<PageNotFound/>}></Route>
        <Route path='/product/men' element={<Men/>}></Route>
        <Route path='/product/women' element={<Women/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App