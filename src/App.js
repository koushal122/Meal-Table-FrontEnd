
import './App.css';
import AdressAndLocation from './Components/adressAndLocation';
import BookTable from './Components/bookTable';
import ImageSlider from './Components/imageSlider';
import Header from './Components/navbar';
import { CAROUSEL_SLIDERS } from './Constants/constants';

function App() {
  return (
    <>
    <Header/>
    <ImageSlider Images={CAROUSEL_SLIDERS}/>
    <AdressAndLocation/>
    </>
    
  );
}

export default App;
