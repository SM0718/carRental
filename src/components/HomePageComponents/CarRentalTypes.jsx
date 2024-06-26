import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { rentalCarTypes } from "../../carInfos/rentalCarTypes";
import Line from "../Line";
import Button from "../Button";
import ArrorTopRight from '../svgComponents/ArrowTopRight'

function CarRentalTypes() {
    
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function SampleNextArrow() {
    return (
      <div
        className={'hidden'}
      />
    );
  }
  
  function SamplePrevArrow() {
    return (
      <div
        className={'hidden'}
      />
    );
  }

  const settings = {
    className: "",
    infinite: true,
    slidesToShow: windowWidth > 600 && windowWidth < 1500? 2 : windowWidth < 600? 1 : 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return (
    <>
    <Line className={'w-full bg-[#222222] flex justify-center pt-16'}/>
    <div className='w-full h-[700px] flex flex-col gap-8 items-center bg-[#222222] pt-24'>
        <div className='flex flex-col gap-3 text-center'>
            <p className='text-[#f5b754] text-[10px] tracking-[10px]'>CATEGORIES</p>
            <p className='text-[35px] font-bold text-white'>Rental  <span className=' text-[#f5b754]'>Car Types</span></p>
        </div>

    <div className="slider-container w-full md:w-4/5 h-[500px]">
      <Slider
      {...settings}>
        
        {
            rentalCarTypes.map((item) => <div className="w-[300px] md:w-1/3 h-[400px] lg:h-[375px] px-4 lg:px-8 rounded-xl overflow-hidden">
                <div className="w-full h-full relative flex items-end justify-end rounded-3xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.pic})`}}>
                    <p className="text-white font-bold text-[21px] px-8 pb-6">{item.name}</p>
                    <Button className={'absolute left-0 rounded-full p-5 font-semibold text-white text-[15px] border-2 border-[#f5b754] backdrop-blur-md'}><ArrorTopRight /></Button>
                </div>
            </div>)
        }
      </Slider>
    </div>

    </div>
    <Line className={'w-full bg-[#222222] flex justify-center pb-16'}/>
    </>
  )
}

export default CarRentalTypes