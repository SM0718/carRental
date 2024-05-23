import React, {useState} from 'react'
import Button from './Button'


function GirlPic({setIsOpen}) {

  

  return (
     <div className='overflow-hidden rounded-3xl relative w-5/6 md:w-[473.55px] h-[473.55px] group
     ' >
        <div className='w-full h-[473.55px] bg-cover bg-center bg-no-repeat
    rounded-3xl transition ease-in-out duration-300 group-hover:scale-105
    '
    style={{backgroundImage: 'url(./girl.jpg)'}}>
            
        </div>
        <span className='absolute -bottom-4 -left-4 rounded-full p-6'>
                <Button
                  onClick={() => setIsOpen(true)}
                className={'rounded-full p-4 border-2 border-[#f5b754] group-hover:bg-[#f5b754]'}>
                <svg width="30px" height="30px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/> <g id="hair"/> <g id="skin"/> <g id="skin-shadow"/> <g id="line">
    <path fill="none" stroke="white" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5" d="M19.5816,55.6062 c0.4848,0.1782,1.0303,0.297,1.5758,0.297c0.8485,0,1.697-0.297,2.4242-0.7722l30-15.9793l0.303-0.297 c0.7879-0.7722,1.2121-1.7227,1.2121-2.7919c0-1.0692-0.4242-2.0791-1.2121-2.7919l-0.303-0.297l-30-16.0981 c-1.0909-0.8316-2.6667-1.0098-4-0.4752c-1.5152,0.594-2.4848,2.0791-2.4848,3.683v31.8397 C17.0967,53.5272,18.0664,55.0122,19.5816,55.6062z"/>
  </g>
</svg>
                </Button>
            </span>

    
  </div>
   
  )
}

export default GirlPic