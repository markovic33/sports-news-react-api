import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_left">
            <Link to="/" className='navbar_item'>NEWS</Link>
        </div>
        <div className="navbar_right">
            <Link to="/" className='navbar_item'>Home</Link>
            <Link to="/football" className='navbar_item'>Football</Link>
            <Link to="/basketball" className='navbar_item'>Basketball</Link>
            <Link to="/hockey" className='navbar_item'>Hockey</Link>
            <Link to="/volleyball" className='navbar_item'>Volleyball</Link>
            <Link to="/rugby" className='navbar_item'>Rugby</Link>
            <Link to="/tennis" className='navbar_item'>Tennis</Link>
        </div>
    </div>
  )
}

export default Navbar