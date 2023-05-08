import { useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'



const CreateProduct = () => {

  

  const navigate = useNavigate()
  const [products, setProducts] = useState('')



  const handleSubmit = async e => {
    e.preventDefault()

    const product = {
      discription,
      productName,
      price,

    }

    const res = await axios.post('url', product)
    if(res.status === 201){
      Navigate('/')
    }
  }


  return (
    <div className='create-form'>
      <h3 className='create-product-text'>Add a new product</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="productName">Name</label>
          <input type="text" name='productName' className='input' id='productName' value={products} onChange={e => setProducts(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor="description">Description</label>
          <input type="text" name='description' className='input' id='description' value={products} onChange={e => setProducts(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor="price">Price</label>
          <input type="number" name='price' className='input' id='price' value={products} onChange={e => setProducts(e.target.value)} />
        </div>
        <button className='btn btn-primary'>ADD</button>
      </form>
    </div>
  )
}

export default CreateProduct