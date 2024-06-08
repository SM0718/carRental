import React, {useState} from 'react'
import SimpleSlider from '../components/HomePageComponents/Slider/SimpleSlider'
import { headCarInfo } from '../carInfos/headCarInfo'
import Rentax from '../components/HomePageComponents/Rentax'
import Parallax from '../components/Parallax'
import Options from '../components/Options'
import DateSelector from '../components/DateSelector'
import Button from '../components/Button'
import LuxuryCarFleet from '../components/HomePageComponents/LuxuryCarFleet'
import Services from '../components/HomePageComponents/Services'
import CarRentalTypes from '../components/HomePageComponents/CarRentalTypes'
import YouTubePlayer from '../components/YoutubePlayer'
import PlayButton from '../components/svgComponents/PlayButton'
import Testimonials from '../components/HomePageComponents/Testimonials'
import CarLogos from '../components/CarLogos'


function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
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
      <Parallax
      className={'h-[550px] lg:h-[450px] bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center'}
      bgImg={'./car/bugatti.webp'}>
          <div className='w-full rounded-full mx-4 sm:mx-16 md:mx-32 flex flex-col justify-center items-center gap-6'>
              <p className='text-[#f5b754] text-[10px] tracking-[10px]'>EXPLORE</p>
              <p className='text-[35px] font-black text-white'>Car <span className='text-[#f5b754]'>Promo</span> Video</p>
                <Button
                  onClick={() => setIsOpen(true)}
                className={'rounded-full p-6 border-[1px] border-[#f5b754] transition ease-in-out duration-300 hover:bg-[#f5b754]'}>
                <PlayButton w={'48'} h={'48'} sw={2}/>
                </Button>
              <div className={`z-50 ${isOpen? "fixed flex" : "hidden"}  justify-center items-center inset-0 bg-black/50 mx-auto my-auto`}>
                <YouTubePlayer setIsOpen={setIsOpen}/>
              </div>
          </div>
          
      </Parallax>
      <Testimonials />
      <Parallax
      className={'h-[550px] lg:h-[450px] bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center'}
      bgImg={'./astonMartin.webp'}>
          <div className='w-full rounded-full mx-4 sm:mx-16 md:mx-32 flex flex-col justify-center items-center gap-2'>
              <p className='text-[#f5b754] text-[10px] tracking-[10px]'>RENT YOUR CAR</p>
              <p className='text-[35px] font-black text-white'>Interested <span className='text-[#f5b754]'>in</span> Renting?</p>
              <div className='flex flex-col md:flex-row gap-4 mt-4'>
                <Button className={'transition ease-in-out bg-[#f5b754] flex justify-center gap-2 rounded-full px-10 py-4 hover:bg-white hover:-translate-y-1'}>View Details <p>&#8599;</p></Button>
                <Button className={'transition ease-in-out flex justify-center gap-2 rounded-full px-12 py-4 text-white border-2 hover:border-[#f5b754] border-white hover:bg-[#f5b754] hover:text-black hover:-translate-y-1'}>Rent Now <p>&#8599;</p></Button>
            </div>
          </div>
      </Parallax>
      <CarLogos />
      
    {/* <ProgressBar className={''}/> */}
    </div>
    
  )
}

export default Home