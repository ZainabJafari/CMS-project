import React from 'react'

const ProductsDetails = () => {



  return (
    <div className='products-details'>
      {/* <div>
        <img src="" alt="" />
      </div> */}

      <div className='products-description'>
          <p>description</p>
          <p>prise: </p>
          <p>name: </p>
      </div>
      <div className='edit'>
        <button className='btn-danger'>Delete</button>
        <button className='btn-secondary'>Uppdatera</button>
      </div>
    </div>
  )
}

export default ProductsDetails