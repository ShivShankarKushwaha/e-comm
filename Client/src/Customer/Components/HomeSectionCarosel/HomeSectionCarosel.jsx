import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../data/Men/men_kurta';
function HomeSectionCarosel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
      itemsFit: 'contain',
    },
  };
  const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  const syncActiveIndex=({item})=>
  {
    console.log('item',item);
    setActiveIndex(item)
  };
  
  return (
    <div className='relative px-4 lg:px-8'>
      <div className='relative p-4'>
        <AliceCarousel activeIndex={activeIndex} onSlideChanged={syncActiveIndex} disableButtonsControls items={items} responsive={responsive} infinite/>
        {/* {activeIndex !== 0 && (
          <Button onClick={()=>{setActiveIndex(prev=>prev-1);console.log('active',activeIndex);}} color='grey' style={{ padding: '2px', minWidth: '20px' }} variant='contained' className='z-50  w-14 h-14' aria-label='next' sx={{ position: 'absolute', top: '6rem', left: '-2rem' }}>
            <KeyboardArrowLeftIcon className='scale-y-[3]' color='black'></KeyboardArrowLeftIcon>
          </Button>
        )}

        {activeIndex !== items.length - 5 && (
          <Button onClick={()=>{setActiveIndex(prev=>prev+1);console.log('active',activeIndex);}} color='grey' style={{ padding: '2px', minWidth: '20px' }} variant='contained' className='z-50 w-14 h-14' aria-label='next' sx={{ position: 'absolute', top: '6rem', right: '-2rem' }}>
            <KeyboardArrowRightIcon className='scale-y-[3]' color='black'></KeyboardArrowRightIcon>
          </Button>
        )} */}
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
