import React from 'react'
import Door from '../svgComponents/Door'
import Gear from '../svgComponents/Gear'
import Shield from '../svgComponents/Shield'
import Profile from'../svgComponents/Profile'
import Button from '../Button'
import {NavLink} from 'react-router-dom'

function LuxuryCarInfo({carName, price, seats, bags}) {
  return (
    <div className='h-28 sm:h-24 bg-[#222222]/75 backdrop-blur-sm absolute transition duration-500 text-white -bottom-32 sm:-bottom-28 group-hover/info:-translate-y-32 sm:group-hover/info:-translate-y-28 w-full text-center z-50
    flex flex-col sm:flex-row justify-evenly items-start px-2 sm:items-center'>
        <div className=''>
          <h1 className='text-start text-[18px] sm:text-[21px] font-bold'>{carName}</h1>
          <div className='flex gap-4'>
            <div className='flex gap-1 items-center'>
              <Door />
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>{seats} Seats</p>
            </div>
            <div className='flex gap-1 items-center'>
              <Gear />
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>Auto</p>
            </div>
            <div className='flex gap-1 items-center'>
              <Shield />
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>{bags} Bags</p>
            </div>
            <div className='flex gap-1 items-center'>
              <Profile />
              <p className='text-[10px] sm:text-[14px] text-[#999999]'>25 Age</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4'>
           <NavLink>
          <Button className={'transition duration-500 bg-[#f5b754] text-[#1b1b1b] text-[14px] px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-white cursor-pointer'}>
           Details</Button>
           </NavLink>
          <span className='flex flex-col items-start'>
            <span className='text-[#f5b754] font-bold text-[16px] sm:text-[21px]'>{price}</span>
            <span className='text-[#999999] text-[10px] sm:text-[14px]'>/day</span>
          </span>
        </div>
    </div>
  )
}

export default LuxuryCarInfo