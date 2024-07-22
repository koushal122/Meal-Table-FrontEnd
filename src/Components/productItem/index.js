import React from 'react'
import './index.scss'

const ProductItem = ({key,Item, className}) => {
  return (
    <div key={key} className={`product-container ${className}`}>
        <img src={Item?.src} alt='item' className="product-image"/>
        <h3 className="product-name">{Item?.productName}</h3>
        <p className="product-details">{Item?.productDetail}</p>
        <p className="price">{Item?.productPrice}</p>
        <button className="add-cart-button">Add to Cart</button>
    </div>
  )
}

export default ProductItem