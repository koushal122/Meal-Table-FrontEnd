import React from 'react'
import Header from '../../Components/navbar'
import { CAROUSEL_SLIDERS } from '../../Constants/constants'
import ImageSlider from '../../Components/imageSlider'
import ContactUS from '../../Components/contactUs'
import Footer from '../../Components/footer'

const Contact = () => {
  return (
    <div>
        <Header/>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <ContactUS/>
        <Footer/>
    </div>
  )
}

export default Contact