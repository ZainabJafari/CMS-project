import { Route, Routes,} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AddProducts from './pages/AddProducts'
import UppdateProduct from './pages/UppdateProduct'
import ProductsList from './pages/ProductsList'
import {ProductsContextProvider} from './context/productsContext'

const App = () => {

  return (
    <div>
      <ProductsContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='create' element={<AddProducts />} />
        <Route path='uppdate/:id' element={<UppdateProduct />} />
      </Routes>
      <Footer />
      </ProductsContextProvider>
    </div>
  )
}

export default App