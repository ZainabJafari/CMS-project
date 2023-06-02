import axios from 'axios';
import { useState, useEffect } from 'react'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
 
const uppdateProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
   const [newProducts, setnewProducts]  = useState({productName: '', description: '', price: '', imageURL: ''});

   const  {productName, description, price, imageURL} = newProducts

   const handleChange = e => {
    setnewProducts({...newProducts, [e.target.name]: e.target.value})
   }

   useEffect(() => {
    loadProducts()
   },[])

   const handleSubmit = async (e) =>{
    e.preventDefault()
    await axios.put(`http://localhost:2000/api/product/${id}`, newProducts)
    
    navigate('/products')
   }


   const loadProducts = async () => {
    const result = await axios.get('http://localhost:2000/api/product/' + id)
    setnewProducts(result.data)
   }

  return (
    <div className='create-form'>
    <h3 className='create-product-text'>Uppdate</h3>
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
      <button className='btn btn-primary' onClick={handleSubmit}>ADD</button>
    </form>
  </div>
  )
}

export default uppdateProduct