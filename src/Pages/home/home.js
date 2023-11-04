import React, { useState } from 'react'
import Header from '../../Components/navbar';
import AdressAndLocation from '../../Components/adressAndLocation';
import BookTable from '../../Components/bookTable';
import ImageSlider from '../../Components/imageSlider';
import { CAROUSEL_SLIDERS } from '../../Constants/constants';
import './home.scss'
import About from '../../Components/about';
import Services from '../../Components/services';
import Coffe_cup_image from '../../Images/coffee_cup.png';
import Coffee_cup_image2 from '../../Images/coffee_cup_2.png';
import DrinkImage from '../../Images/drink-with-ice.png';
import Coffee_cup_image3 from '../../Images/carousel_bg_2.png';
const Home = () => {
    const [navChange,setNavchange]=useState(false);

    const changeNavStyle=()=>{
        if(window.scrollY>=300){
           setNavchange(true)
        }else{
           setNavchange(false);
        }
    }
    window.addEventListener("scroll", changeNavStyle);
    return (
        <>
        <Header className={navChange?"navbar-style":""}></Header>
        <ImageSlider Images={CAROUSEL_SLIDERS}/>
        <div className="home-adress-book-table">
          <AdressAndLocation className="address-location" ></AdressAndLocation>
          <BookTable className="home-book-table" ></BookTable>
        </div>
        <About/>
        <Services/>
        <div className="home-menu-section">
            <div className="home-menu-section-first">
                 <span>Discover</span>
                 <h3>OUR MENU</h3>
                 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                 <button>View Full Menu</button>
            </div>
            <div className="home-menu-section-images-row">
               <div className="home-menu-section-images-col">
                  <img src={Coffe_cup_image} alt='coffee_cup' />
                  <img src={DrinkImage} alt='coffee_cup' />
               </div>
               <div className="home-menu-section-images-col" >
                 <img src={Coffee_cup_image2} alt='coffee_cup' />
                  <img src={Coffee_cup_image3} alt='coffee_cup' />
               </div>
            </div>
        </div>
        </>
        
      );
}

export default Home