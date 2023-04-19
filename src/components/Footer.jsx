import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import {FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_left">
            <Link to="/" className='navbar_item'>Home</Link>
            <Link to="/football" className='navbar_item'>Football</Link>
            <Link to="/basketball" className='navbar_item'>Basketball</Link>
            <Link to="/hockey" className='navbar_item'>Hockey</Link>
            <Link to="/volleyball" className='navbar_item'>Volleyball</Link>
            <Link to="/rugby" className='navbar_item'>Rugby</Link>
            <Link to="/tennis" className='navbar_item'>Tennis</Link>
        </div>
        <div className="footer_right">
            <p>Find us</p>
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaYoutube />
        </div>
    </div>
  )
}

export default Footer