import React from 'react'
import Icon from './Icon'

function Footer() {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-evenly'>

      <div className='flex gap-4'>
        <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'}>
        <svg width="40px" height="40px" viewBox="0 -0.5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379
 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </Icon>
        <div className='flex flex-col justify-center'>
          <p>Call Us</p>
          <p className='text-[14px]'>+971 52-333-4444</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'} >
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#000"/>
</svg>
        </Icon>
        <div className='flex flex-col justify-center'>
          <p>Write To Us</p>
          <p className='text-[14px]'>info@renax.com</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <Icon className={'size-16 rounded-full bg-[#f5b754] flex items-center justify-center'} >
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </Icon>
        <div className='flex flex-col justify-center'>
          <p>Address</p>
          <p className='text-[14px]'>Dubai, Water Tower, Office 123</p>
        </div>
      </div>

      </div>

      <div></div>

      <div></div>
    </div>
  )
}

export default Footer