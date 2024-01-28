import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';


const MainCarosel = () =>
{ 
    const items = mainCaroselData.map((item)=><img className='cursor-pointer w-screen h-auto' src={item.image} alt={item.path}></img>)
    return <AliceCarousel items={items} disableButtonsControls autoPlay autoWidth autoPlayInterval={1000} infinite/>;
    
};
export default MainCarosel;