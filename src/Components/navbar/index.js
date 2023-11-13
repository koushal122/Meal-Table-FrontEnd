import React, {useState} from 'react'
import './index.scss';
import cart from '../../Images/cart-icon.png';
import { Link } from 'react-router-dom';

const Header = ({className}) => {

  const [navChange,setNavchange]=useState(false);

    const changeNavStyle=()=>{
        if(window.scrollY>=300){
           setNavchange(true)
        }else{
           setNavchange(false);
        }
    }
    window.addEventListener("scroll", changeNavStyle);
  return (
    <div className={navChange?"navbar navbar-style":"navbar"}>
       <div id="logo">
            <div>COFFEE</div>
            <small>BLEND</small>
       </div>
       <ul className="navbar-list">
        <Link to='/' className='navbar-list-item'><li>HOME</li></Link>
        <Link to='/menu' className='navbar-list-item' ><li >MENU</li></Link>
        <Link to='/services' className='navbar-list-item' ><li>SERVICES</li></Link>
        <Link to='/blog' className='navbar-list-item' ><li>BLOG</li></Link>
        <Link to='/about' className='navbar-list-item' ><li>ABOUT</li></Link>
        <Link to='/shop' className='navbar-list-item' ><li>SHOP</li></Link>
        <Link to='/contact' className='navbar-list-item' ><li >CONTACT</li></Link>
        <Link to='/cart' className='navbar-list-item'><img src={cart} alt='cart' style={{width:'20px'}} /></Link>
       </ul>
    </div>
  )
}

export default Header