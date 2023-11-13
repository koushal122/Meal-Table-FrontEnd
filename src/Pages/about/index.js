import React from 'react'
import { CAROUSEL_SLIDERS , products} from '../../Constants/constants';
import Header from '../../Components/navbar';
import ImageSlider from '../../Components/imageSlider';
import About from '../../Components/about/story';
import Reviews from '../../Components/reviews';
import GrowingNumbers from '../../Components/about/growing';
import Footer from '../../Components/footer';

const AboutPage = () => {
  return (
    <div>
        <Header/>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <About/>
        <Reviews/>
        <GrowingNumbers/>
        <Footer/>
    </div>
  )
}

export default AboutPage