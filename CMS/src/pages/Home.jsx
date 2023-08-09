import React from 'react'
import {Link, useParams} from 'react-router-dom'
import axios  from 'axios'
import { useState, useEffect , useContext } from 'react'
import {ProductsContext} from '../context/productsContext'

const Home = () => {

  const {_id} = useParams()

    // const [products, setProducts] = useState([])
    // const [productId, setProductId] =useState() 

    const {getData , productId , loadProduct} = useContext(ProductsContext)

    useEffect(() => {
        loadProduct()
      }, [])

      // const loadProduct = async () => {
      //   const result = await axios.get("http://localhost:2000/api/product")
      //   setProducts(result.data)
      //   console.log(products);
      //   products.forEach(pro => {
      //     setProductId(pro._id)
      //   })
        

      // }


      const deletProduct = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:2000/api/product/${id}`);
          console.log(res);
          loadProduct();
        } catch (err) {
          console.error(err);
        }
      }

      

  return (
    <div className="container">
    <div className="py-4">
          {getData.map((item) => ( 
            <div className='product-list' key={item._id}> 
                
              <p className='product-style'>{item.productName}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <img 
              src={item.imageURL}
              alt={item.title}
              style={{ display: "block", maxWidth: "10%" }}
            />              <p>

                <Link
                  className="btn btn-primary"
                  to={`/uppdate/${item._id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-primary"
                  onClick={() => deletProduct(item._id)}
                >
                  Delete
                </Link>
              </p>
            </div>
          ))}
    </div>
  </div>
  )
}

export default Home