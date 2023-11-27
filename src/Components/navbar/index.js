import React, {useState} from 'react'
import './index.scss';
import cart from '../../Images/cart-icon.png';
import { Link } from 'react-router-dom';
import MenuIcon from '../../Images/menu-icon-white.png';
import { set } from 'mongoose';

const Header = ({className}) => {

  const [navChange,setNavchange]=useState(false);
  const [displayMenu,setDisplayMenu] = useState(true);

    const changeNavStyle=()=>{
        if(window.scrollY>=300){
           setNavchange(true)
        }else{
           setNavchange(false);
        }
    }
    window.addEventListener("scroll", changeNavStyle);
    window.addEventListener("resize", ()=>{
      if (window.innerWidth >= 1100){
         setDisplayMenu(true);
       } else {
          setDisplayMenu(false);
      }
    });
  return (
    <div className={navChange?"navbar navbar-style":"navbar"}>
      <div className='navbar-logo-with-menu'>
        <div id="logo">
              <div>COFFEE</div>
              <small>BLEND</small>
        </div>
        <div className='navbar-menu-icon' onClick={()=>{setDisplayMenu(!displayMenu)}}>
            <img src={MenuIcon} alt='MenuICon' className='navbar-menu-icon-image' />
            <p>Menu</p>
       </div>
      </div>
        {
          displayMenu||window.width>=1100?
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
          :null
        }
       
    </div>
  )
}

export default Header