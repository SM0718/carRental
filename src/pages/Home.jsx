import React from 'react'
import SimpleSlider from '../components/HomePageComponents/Slider/SimpleSlider'
import { headCarInfo } from '../carInfos/headCarInfo'
import Rentax from '../components/HomePageComponents/Rentax'
import Parallax from '../components/Parallax'
import Options from '../components/Options'
import DateSelector from '../components/DateSelector'
import Button from '../components/Button'
import LuxuryCarFleet from '../components/HomePageComponents/LuxuryCarFleet'
import Services from '../components/HomePageComponents/Services'
import Line from '../components/Line'
import CarRentalTypes from '../components/HomePageComponents/CarRentalTypes'


function Home() {
  return (
    <div className=''>
      <SimpleSlider arr={headCarInfo}/>
      <Rentax />
      <Services />
      <Parallax
      className={'h-[600px] lg:h-[500px] bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center'}
      bgImg={'./car/silverAudi.webp'}>
        <div className='w-full rounded-full mx-4 sm:mx-16 md:mx-32 flex flex-col justify-center items-center gap-6'>
          <p className='text-[#f5b754] text-[10px] tracking-[10px]'>RENT NOW</p>
          <p className='text-[35px] font-black text-white'>Book Auto Rental</p>
          <div className='w-full h-96 lg:h-20 flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 px-4 bg-[#222222] text-[#999999] rounded-xl lg:rounded-full '>
            <Options className={''} options={['Choose Car Type', 'All', 'Luxury Cars', 'Sports Cars', 'SUVs', 'Convertables']}/>
            <Options options={['Pickup Location', 'Kolkata', 'Mumbai', 'Delhi', 'Bangalore']}/>
            <DateSelector />
            <Options options={['Drop Location', 'Kolkata', 'Mumbai', 'Delhi', 'Bangalore']}/>
            <DateSelector />
            <Button className={'transition ease-in-out text-black bg-[#f5b754] mx-auto lg:mx-0 flex justify-center gap-2 rounded-full px-10 py-4 hover:bg-white'}>Rent Now</Button>
          </div>
        </div>
      </Parallax>
      <LuxuryCarFleet />
      <CarRentalTypes />
    </div>
    
  )
}

export default Home