import React, {useState, useEffect,useRef, useId} from "react";
import Button from '../Button'



const SliderCarInfo = React.forwardRef(function SliderCarInfo({className, name, price, backgroundImg, key, currentSlide, index}, ref) {

  return (
    <div key={index} className={`${className} w-full h-screen flex justify-center bg-cover bg-center bg-no-repeat
    relative before:content-[""] before:absolute before:h-full before:w-full
    before:bg-black/50 before:top-0 before:left-0 before:z-20`} 
    style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className={`w-3/4 ${currentSlide? "flex" : "hidden"} flex flex-col justify-center z-30`}>
            <div className="">
              <p className={`text-[#f5b754] tracking-[5px] text-xs hiddenClass_1 showContent`}>* PREMIUM</p>
              <h1 className='flex items-start text-[45px] md:text-[70px] lg:text-[85px] font-bold text-white hiddenClass_2 showContent'>Rental Car</h1>
            </div>
            <div className='flex justify-between md:justify-start gap-8 text-white hiddenClass_3 showContent'>
              <p className='text-[20px] font-semibold '>{name}</p>
              <span className='flex items-evenly p-0 gap-1'>
                <p className='text-[#f5b754] font-bold text-xl'>{price}</p>
                <p className='text-[12px] flex items-end pb-[3px]'>/DAY</p>
              </span>
            </div>
            <div className='flex flex-col md:flex-row gap-4 mt-4 hiddenClass_4 showContent'>
              <Button className={'transition ease-in-out bg-[#f5b754] flex justify-center gap-2 rounded-full px-10 py-4 hover:bg-white hover:-translate-y-1'}>View Details <p>&#8599;</p></Button>
              <Button className={'transition ease-in-out flex justify-center gap-2 rounded-full px-12 py-4 text-white border-2 hover:border-[#f5b754] border-white hover:bg-[#f5b754] hover:text-black hover:-translate-y-1'}>Rent Now <p>&#8599;</p></Button>
            </div>
        </div>
        
    </div>
  )
}
)

export default SliderCarInfo