
import './App.css';
import ImageSlider from './Components/imageSlider';
import Header from './Components/navbar';
import { CAROUSEL_SLIDERS } from './Constants/constants';

function App() {
  return (
    <>
    <Header/>
    <ImageSlider Images={CAROUSEL_SLIDERS}/>
    </>
    
  );
}

export default App;
