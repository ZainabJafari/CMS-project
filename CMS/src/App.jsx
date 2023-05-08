import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails'
import CreateProduct from './pages/CreateProduct'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='details' element={<ProductsDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App