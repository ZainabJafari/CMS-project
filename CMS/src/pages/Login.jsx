import  { useState } from 'react'
import axios from 'axios'
import {useNavigate, Navigate} from 'react-router-dom'


const Login = () => {


  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e =>{
    setFormData(preData => {
      return {
        ...preData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email === 'mia@.com' && !formData.password === 'mia'){
      return false
    }
      
    
    const res = await axios.post('http://localhost:2000/api/user/login', formData)
    console.log(res);
    if(res){
      navigate('/products')
    }
  
  }
  


  return (

    <div className='create-form'>
      <p className='form-text'>Please Login To Your Account</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label><p className='red-text'></p>
          <input type="email" name='email' className='input' id='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label><p className='red-text1'></p>
          <input type="password" name='password' className='input' id='password' value={formData.password} onChange={handleChange}/>
        </div>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login