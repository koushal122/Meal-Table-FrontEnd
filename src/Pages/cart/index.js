import React, { useEffect, useState } from 'react'
import Header from '../../Components/navbar'
import './index.scss'
import CartItem from '../../Components/cartItem'
import * as constants from './constants'
import Unauthorized from '../../Components/unauthorized'
import useAuth from '../../customHooks/useAuth'
import genericInterface from '../../Util/genericInterface'
import { useSelector } from 'react-redux'

const Cart = () => {

  const getCartByUserApi = genericInterface(constants.GET_CART_BY_USER_ENDPOINT);
  const [cartItems, setCartItems] =useState({});
  const {isAuthenticated} = useAuth();
  const userEmail = useSelector((store)=> store.authentication.userEmail);

  useEffect(()=>{
      if(!isAuthenticated) return;
      const fetchData = async () => {
        const params = {userEmail:userEmail}
        const response = await getCartByUserApi.read(params);
        setCartItems(response.data);
      }
      fetchData();
  },[])

  return (
   <>
   <Header/>
   {
     isAuthenticated?
        (
          <div className='cart-body'>
        <p className='cart-header'>Your cart items</p>
        {
            cartItems?.products?.map((value)=>{
              return <CartItem {...value} quantity={cartItems?.productQuantityWithId[value.id]}/>;
            })
        }
        <div className='total-price'>
          <span>Total Value :- </span>
          <span>&#8377;{cartItems?.totalPrice}</span>
        </div>
        <button className='checkout'>Checkout</button>
      </div>
      ):<Unauthorized/>
   }
   
   </>
  )
}

export default Cart