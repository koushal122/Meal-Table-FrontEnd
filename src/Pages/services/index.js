import React from 'react'
import Header from '../../Components/navbar'
import ImageSlider from '../../Components/imageSlider'
import { CAROUSEL_SLIDERS , products} from '../../Constants/constants';
import Services from '../../Components/services';
import Footer from '../../Components/footer';
const ServicesPage = () => {
  return (
    <div>
        <Header/>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default ServicesPage