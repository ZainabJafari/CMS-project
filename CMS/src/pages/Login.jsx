import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) =>{
        e.preventDefault()

    }


  return (

    <div className='create-form'>
        <p className='login-text'>Please Login To Your Account</p>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label htmlFor="email">E-mail*</label>
        <input type="text" name='email' className='input' id='email' value={formData.email}  />
        </div>
        <div className='form-group'>
        <label htmlFor="password">Password*</label>
        <input type="text" name='password' className='input' id='password' />
        </div>
        <div>
        <input className='checkbox' type="checkbox" />
        <label className='text' htmlFor="checkbox">Please keep me logged in</label>
        </div>
        <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default Login