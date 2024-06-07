import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {reviews} from '../../carInfos/reviews'
import Quotaion from '../../components/svgComponents/Quotaion'
import Star from "../svgComponents/Star";

function Testimonials() {

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
    <div className='w-full h-[700px] flex flex-col gap-8 items-center bg-[#1b1b1b] pt-24'>
        <div className='flex flex-col gap-3 text-center'>
            <p className='text-[#f5b754] text-[10px] tracking-[10px]'>TESTIMONIALS</p>
            <p className='text-[35px] font-bold text-white'>What  <span className=' text-[#f5b754]'>Clients</span> Say</p>
        </div>
        <div className="slider-container w-full md:w-4/5 h-[350px]">
          <Slider
          {...settings}>
            {
              reviews.map((item) => 
              <div className="w-1/6 h-[300px] p-8">
                <div className="h-full bg-[#222222] relative flex flex-col justify-between rounded-lg p-4">
                

                <div className="flex justify-between items-center">
                  <Quotaion />
                  <div className="flex">
                    {
                      Array(5).fill('').map(_ => <Star />)
                    }
                  </div>
                </div>

                <p className="text-[#999999] text-[14px]">
                Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.
                </p>

                <div className="w-full flex justify-between rounded-xl">
                 
                  <span className="ml-24">
                    <p className="text-white text-[14px]">{item.name}</p>
                    <p className='text-[#999999] text-[12px]'>Customer</p>
                  </span>
                </div>
                 <img className="absolute rounded-full size-12 bottom-4" src={item.pic}/>
                </div>
              </div>)
            }
          </Slider>
        </div>
    </div>
  )
}

export default Testimonials