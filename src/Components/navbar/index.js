import React from 'react'
import './index.scss';
import cart from '../../Images/cart-icon.png';

const Header = ({className}) => {
  return (
    <div className={`navbar ${className}`}>
       <div id="logo">
            <div>COFFEE</div>
            <small>BLEND</small>
       </div>
       <ul className="navbar-list">
        <li className="navbar-list-item">HOME</li>
        <li className="navbar-list-item" >MENU</li>
        <li className="navbar-list-item" >SERVICES</li>
        <li className="navbar-list-item" >BLOG</li>
        <li className="navbar-list-item" >ABOUT</li>
        <li className="navbar-list-item" >SHOP</li>
        <li className="navbar-list-item" >CONTACT</li>
        <img src={cart} alt='cart' className="navbar-list-item" style={{width:'20px'}} />
       </ul>
    </div>
  )
}

export default Header