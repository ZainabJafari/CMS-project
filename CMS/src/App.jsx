import {Route, Routes,} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddProducts from './pages/AddProducts'
import UppdateProduct from './pages/UppdateProduct'
import Home from './pages/Home'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState()

  return (
    <div>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Home />} />
        <Route path='create' element={<AddProducts />} />
        <Route path='uppdate/:id' element={<UppdateProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App