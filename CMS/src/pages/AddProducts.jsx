import axios from 'axios';
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
 
const AddProducts = () => {
    const navigate = useNavigate()

   const [newProducts, setnewProducts]  = useState({productName: '', description: '', price: '', imageURL: ''});

   const {productName, description, price, imageURL} = newProducts
   const handleChange = e => {
    setnewProducts({...newProducts, [e.target.name]: e.target.value})
   }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await axios.post('http://localhost:2000/api/product/add', newProducts)
    navigate('/products')
   }

  return (
    <div className='create-form'>
    <h3 className='create-product-text'>Add a new product</h3>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="name">Name</label>
        <input type="text" name='productName' className='input' id='productName' value={newProducts.productName} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor="description">Description</label>
        <input type="text" name='description' className='input' id='description' value={newProducts.description} onChange={handleChange}/>
      </div>
      <div className='form-group'>
        <label htmlFor="price">Price</label>
        <input type="text" name='price' className='input' id='price' value={newProducts.price} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor="imageURL">imageURL</label>
        <input type="text" name='imageURL' className='input' id='imageURL' value={newProducts.imageURL} onChange={handleChange} />
      </div>
      <button className='btn btn-primary'>ADD</button>
    </form>
  </div>
  )
}

export default AddProducts