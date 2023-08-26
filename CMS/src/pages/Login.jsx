import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'

const Login = () => {

  const navigate = useNavigate()

    const schema = yup.object().shape({
      email: yup.string().email().required('The email field is required'),
      password: yup.string().required('The password field is required')
    })

    const {handleSubmit , register , formState:{errors}} = useForm({resolver: yupResolver(schema)})


    // The Admins email is "zainab123@com" password "jafari"

    const onSubmit = async (values) => {
      await axios.post('http://localhost:2000/api/admin/login/admin', values)
       navigate('/products')
    }

  return (

    <div className='create-form'>
      <p className='form-text'>Please Login To Your Account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label><p className='red-text'></p>
          <input type="email" className='input' {...register('email')}/>
          {errors.email && (
                <p className='error'>{errors.email?.message}</p>
            )}
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label><p className='red-text1'></p>
          <input type="password" className='input' {...register('password')}/>
          {errors.password && (
                <p className='error'>{errors.password?.message}</p>
            )}
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default Login