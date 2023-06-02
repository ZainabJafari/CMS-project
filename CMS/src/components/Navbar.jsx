import React from 'react'
import { FaAdn } from "react-icons/fa";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='header'>
        <div className='title-logo'>
          <FaAdn size={30}/>
          <h3>ECOMMERCE</h3>
        </div>
            <li className='nav-li'><NavLink to="/products">Products</NavLink></li>
                <li className='nav-li'><NavLink to="/create">Add new product</NavLink></li>
      </div>
    )
}

export default Navbar

