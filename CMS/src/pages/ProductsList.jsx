import {useContext , useEffect} from 'react'
import {ProductsContext} from '../context/productsContext'
import Product from '../components/Product'

const ProductsList = () => {
    const {loadProduct} = useContext(ProductsContext)

    useEffect(() => {
        loadProduct()
      }, [])

  return ( <div >
    <Product />
  </div>  )
    
}

export default ProductsList