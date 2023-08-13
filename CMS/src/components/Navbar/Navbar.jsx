import {useContext} from 'react'
import { FaAdn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {ProductsContext} from '../../context/productsContext'
import './Navbar.css'

const Navbar = () => {
  const {state , toggle} = useContext(ProductsContext)

    return (
        <div className='header'>
        <div className='title-logo'>
          <FaAdn size={30}/>
          <h3>ECOMMERCE</h3>
        </div>
          { state && <li className='nav-li'><NavLink to="/products">Products</NavLink></li>}
           {state && <li className='nav-li'><NavLink to="/create">Add new product</NavLink></li>}
           {state && <li className='nav-li'><NavLink to="/" onClick={() => toggle()}>Logout</NavLink></li>}
      </div>
    )
}

export default Navbar

