import React, { useState } from 'react'
import HeadingText from '../headingTexts'
import './index.scss'
import { mainDishProducts, products } from '../../Constants/constants'
import { starterProduct } from '../../Constants/constants'
import { dessertsProduct } from '../../Constants/constants'
import ProductItem from '../productItem'

const ProductMenu = () => {        
  const [activeMenuType,setActiveMenuType]=useState(1);
  return (
    <div>
        <div className="product-menu-heading">
            <HeadingText heading1="Discover" heading2="Our Products"/>
        </div>
        <div className="product-menu-body">
            <div className="menu-type">
                <button onClick={()=>{setActiveMenuType(1)}} className={`menu-type-option ${activeMenuType===1?"active-menu-type":""}`}>Main Dish</button>
                <button onClick={()=>{setActiveMenuType(2)}} className={`menu-type-option ${activeMenuType===2?"active-menu-type":""}`} >Drinks</button>
                <button onClick={()=>{setActiveMenuType(3)}} className={`menu-type-option ${activeMenuType===3?"active-menu-type":""}`} >Desserts</button>
            </div>
            <div>
                {
                    activeMenuType===1?
                    <div className="menu-items-container">
                        {
                            starterProduct.map((product,index)=>{
                                return <ProductItem key={index} Item={product} className="menu-items"/>
                            })
                        }
                    </div>:(
                        activeMenuType===2?
                        <div className="menu-items-container" >
                            {mainDishProducts.map((product,index)=>{
                                return <ProductItem key={index} Item={product} className="menu-items" />
                            })}
                        </div>:
                        <div className="menu-items-container" >
                            {dessertsProduct.map((product,index)=>{
                                return <ProductItem key={index} Item={product} className="menu-items"/>
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ProductMenu