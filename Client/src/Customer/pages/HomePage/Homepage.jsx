import React from 'react'
import MainCarosel from '../../Components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel';

function Homepage() {
  return (
    <div>
        <MainCarosel></MainCarosel>
        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarosel></HomeSectionCarosel>
        </div>
    </div>
  )
}

export default Homepage;