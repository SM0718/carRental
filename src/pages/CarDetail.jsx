import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {scrollCarInfo} from '../carInfos/scrollCarInfo'
import Door from '../components/svgComponents/Door';
import Gear from '../components/svgComponents/Gear';
import Shield from '../components/svgComponents/Shield';
import Profile from '../components/svgComponents/Profile';
import Thermometer from '../components/svgComponents/Thermometer';
import Button from '../components/Button'
import WhatsApp from '../components/svgComponents/WhatsApp';
import TickMark from '../components/svgComponents/TickMark';

function CarDetail() {

    const {id} = useParams();
    const car = scrollCarInfo.filter(item => item.name === id.replace(/-/g, ' '))[0]
  return (
    <div className='w-screen bg-[#1b1b1b]'>
      <div className='w-screen h-[500px] flex justify-start items-center px-8 bg-cover bg-center bg-no-repeat
    relative before:content-[""] before:absolute before:h-full before:w-full
    before:bg-black/50 before:top-0 before:left-0 before:z-20' style={{backgroundImage: `url(/${car.img})`}}>
      <div className='w-5/6 h-60 mx-auto flex flex-col justify-center gap-3 z-50 pl-12'>
            <p className='text-[#f5b754] text-[10px] tracking-[10px]'>LUXURY CARS</p>
            <p className='text-[35px] font-bold text-white'>{car.name}</p>
        </div>
      </div>

      <div className='w-full flex flex-col xl:flex-row justify-center gap-8 px-8 lg:px-40 lg:pt-20'>

        <div className='w-full xl:w-1/2 flex flex-col items-start justify-start gap-8'>
          <h1 className='text-white text-[21px] font-bold w-full'>General Information</h1>
          <p className='text-[#999999] text-[14px] lg:w-1/2 leading-loose w-full'>Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton.</p>
          <div className=' flex flex-col gap-4'>
            <span className='flex gap-4'>
              <span className='size-8 bg-[#333333] rounded-full flex justify-center items-center'>
                <TickMark />
              </span>
              <p className='text-[#999999]'>24/7 Roadside Assistance</p>
            </span>

            <span className='flex gap-4'>
              <span className='size-8 bg-[#333333] rounded-full flex justify-center items-center'>
                <TickMark />
              </span>
              <p className='text-[#999999]'>Free Cancellation & Return</p>
            </span>

            <span className='flex gap-4'>
              <span className='size-8 bg-[#333333] rounded-full flex justify-center items-center'>
                <TickMark />
              </span>
              <p className='text-[#999999]'>Rent Now Pay When You Arrive</p>
            </span>
          </div>
        </div>

        <div className='w-full xl:w-1/2 rounded-xl  right-44 -top-24 z-50'>
          <div className='bg-[#f5b754] text-[#1b1b1b] px-22 py-6 flex items-end rounded-t-3xl justify-center font-bold text-[32px]'>{car.price}<span className='text-[14px] font-thin'>/DAY</span>
          </div>
          <div className='w-full flex flex-col justify-center bg-[#222222]'>

            <div className='flex flex-col gap-8 p-4 text-[10px] sm:text-[14px]'>
          <div className='w-full flex justify-between gap-1 items-center'>
            <span className='lg:w-1/4 flex justify-start items-center gap-4'>
              <span className='p-2 rounded-full bg-[#333333]'>
                <Door />
              </span>
              <p className='text-[#999999]'>Doors</p>
            </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>{car.seats} Seats</p>
            </div>
            
            <div className='w-full flex justify-between gap-1 items-center'>
              <span  className='w-1/4 flex justify-start items-center gap-4'>
                <span className='p-2 rounded-full bg-[#333333]'>
                  <Gear />
                </span>
              <p className='text-[#999999]'>Transmission</p>
              </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>Auto</p>
            </div>

            <div className='w-full flex justify-between gap-1 items-center'>
              <span className='w-1/4 flex justify-start items-center gap-4'>
                <span className='p-2 rounded-full bg-[#333333]'>
                  <Shield />
                </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>Luggage</p>
              </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>{car.bags} Bags</p>
            </div>

            <div className='w-full flex justify-between gap-1 items-center'>
              <span className='w-1/4 flex justify-start items-center gap-4'>
                <span className='p-2 rounded-full bg-[#333333]'>
                 <Thermometer />
                </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>AC</p>
              </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>Yes</p>
            </div>

            <div className='w-full flex justify-between gap-1 items-center'>
              <span className='w-1/4 flex justify-start items-center gap-4'>
                <span className='p-2 rounded-full bg-[#333333]'>
                  <Profile />
                </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>Age</p>
              </span>
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>25 Age</p>
            </div>

            
          </div>
          <div className='w-[300px] mx-auto flex justify-center gap-1 relative'>
            <Button className={'transition duration-300 bg-[#f5b754] rounded-l-full px-8 py-5 text-[#1b1b1b] text-[14px] font-thin hover:bg-white'}>Rent Now</Button>
            <span className='bg-[#222222] text-white rounded-full size-8 flex justify-center items-center absolute left-[132px] top-4'>&</span>
            <Button className={'transition duration-300 flex items-center gap-2 bg-[#f5b754] rounded-r-full px-8 py-5 text-[#1b1b1b] text-[14px] font-thin hover:bg-white'}>WhatsApp</Button>
          </div>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default CarDetail