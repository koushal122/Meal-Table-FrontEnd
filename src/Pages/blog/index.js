import React from 'react'
import { CAROUSEL_SLIDERS , products} from '../../Constants/constants';
import Header from '../../Components/navbar';
import ImageSlider from '../../Components/imageSlider';
import Blog from '../../Components/blog';
import Footer from '../../Components/footer';

const BlogPage = () => {
  return (
    <div>
        <Header/>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default BlogPage