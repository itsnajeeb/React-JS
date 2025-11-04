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
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App