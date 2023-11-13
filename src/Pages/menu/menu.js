import React from 'react'
import Header from '../../Components/navbar'
import AdressAndLocation from '../../Components/adressAndLocation'
import BookTable from '../../Components/bookTable'
import ImageSlider from '../../Components/imageSlider'
import { CAROUSEL_SLIDERS , products} from '../../Constants/constants';
import ProductMenu from '../../Components/productMenu'
import Footer from '../../Components/footer'

const Menu = () => {
  return (
    <div>
        <Header/>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <div className="home-adress-book-table">
          <AdressAndLocation className="address-location" ></AdressAndLocation>
          <BookTable className="home-book-table" ></BookTable>
        </div>
        <ProductMenu/>
        <Footer/>
    </div>
  )
}

export default Menu