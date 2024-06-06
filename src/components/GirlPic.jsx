import React, {useState} from 'react'
import Button from './Button'
import PlayButton from './svgComponents/PlayButton'


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
                <PlayButton w={'40'} h={'40'} sw={2}/>
                </Button>
            </span>

    
  </div>
   
  )
}

export default GirlPic