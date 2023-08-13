import axios from 'axios';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'


const uppdateProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [newProducts, setnewProducts] = useState({ productName: '', description: '', price: '', imageURL: '' });



  const handleChange = e => {
    setnewProducts({ ...newProducts, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:2000/api/product/${id}`, newProducts)

    navigate('/products')
  }

  const loadProducts = async () => {
    const result = await axios.get('http://localhost:2000/api/product/' + id)
    setnewProducts(result.data)
  }

  return (
    <div className='cart'>
      <h3 className='text'>Products Details</h3>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <div className=''>
            <img src={newProducts.imageURL} className='cart-img' />
          </div>
        </div>
        <div className='input-group'>
          <div className='input-style'>
            <label htmlFor="name">Name</label>
            <input type="text" name='productName' className='inputs' id='productName' value={newProducts.productName} onChange={handleChange} />
          </div>
          <div className='input-style'>
            <label htmlFor="description">Description</label>
            <input type="text" name='description' className='inputs' id='description' value={newProducts.description} onChange={handleChange} />
          </div>
          <div className='input-style'>
            <label htmlFor="price">Price</label>
            <input type="text" name='price' className='inputs' id='price' value={newProducts.price} onChange={handleChange} />
          </div>
          <div className='input-style'>
            <label htmlFor="imageURL">imageURL</label>
            <input type="text" name='imageURL' className='inputs' id='imageURL' value={newProducts.imageURL} onChange={handleChange} />
          </div>
          <div className='btn'>
          <div className='input-style'>
            <button className='btn-success' onClick={handleSubmit}>Update</button>
          </div>
          <div className='input-style'>
            <button className='btn-back' onClick={handleSubmit}>Back</button>
          </div>
        </div>
          </div>
      </form>
    </div>
  )
}

export default uppdateProduct