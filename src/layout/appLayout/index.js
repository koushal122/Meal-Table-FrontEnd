import React from 'react'
import Header from '../../Components/navbar'
import ImageSlider from '../../Components/imageSlider'
import Footer from '../../Components/footer'
import { CAROUSEL_SLIDERS } from '../../Constants/constants'

const AppLayout = (props) => {
  const {children} = props
  return (
     <>
        <Header/>
        {children}
        <Footer/>
     </>
  )
}

export default AppLayout