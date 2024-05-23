import React from 'react'
import SimpleSlider from '../components/Slider/SimpleSlider'
import Rentax from '../components/Rentax'
import Parallax from '../components/Parallax'

function Home() {
  return (
    <div className=''>
      <SimpleSlider />
      <Rentax />
      <Parallax
      className={'h-[500px] bg-cover bg-no-repeat bg-center bg-fixed'}
      bgImg={'./car/silverAudi.webp'}>

      </Parallax>
    </div>
  )
}

export default Home