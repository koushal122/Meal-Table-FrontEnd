import React from 'react'
import './index.scss'
import FasterDeliveryImage from '../../Images/blogImage3.webp';


const CartItem = (props) => {
  const {
    name,
    description,
    price,
    quantity
   } = props;
  return (
    <div className='cart-item'>
        <img alt='Item' src={FasterDeliveryImage} className='cart-image'/>
        <div className='name-description'>
            <p className='name'>{name}</p>
            <p className='description'>{description}</p>
        </div>
        <div className='quantity'>
           <i class="fa-solid fa-square-plus fa-2xl icon" style={{color: "#e59d38"}}></i>
           <p>{quantity}</p>
           <i class="fa-solid fa-square-minus fa-2xl icon" style={{color: "#e59d38"}}></i>
        </div>
        <div className='price'>
            <p>&#8377;{price}</p>
            <button type='button' className='remove-button'>remove</button>
        </div>
    </div>
  )
}

export default CartItem

