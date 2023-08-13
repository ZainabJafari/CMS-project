import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { Link } from 'react-router-dom'

function Product(props) {

  const { getData, deletProduct } = useContext(ProductsContext)


  return (
    <div className="container">
      <div className="py-4">
        {getData.map((item) => (
          <div className='product-list' key={item._id}>
            <div className='product-style'><h5 className='name-style'>Name:</h5>{item.productName}</div>
            <div className='product-style'><h5>Description:</h5>{item.description}</div>
            <div className='product-style'><h5>Price:</h5> {item.price} $</div>
            <img
              src={item.imageURL}
              alt={item.title}
              style={{ display: "block", maxWidth: "10%" }} />
            <div className='btn-input'>
              <Link
                to={`/uppdate/${item._id}`} ><button className='btn-style'>Datail</button></Link>
              <button
                className="btn-style-danger"
                onClick={() => deletProduct(item._id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product