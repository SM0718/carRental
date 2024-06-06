import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import {scrollCarInfo} from '../../carInfos/scrollCarInfo'
import Left from '../svgComponents/Left';
import Right from '../svgComponents/Right';
import LuxuryCarInfo from './LuxuryCarInfo';

function LuxuryCarFleet() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function SampleNextArrow(props) {
        const {onClick} = props;
        return (
          <div
            className={`absolute justify-center items-center transition duration-500 hidden group-hover:flex hover:bg-white cursor-pointer
             right-10 sm:right-[100px] md:right-[125px] lg:right-[350px] top-6 sm:top-44 z-40 size-14 rounded-full bg-[#f5b754]`}
            onClick={onClick}
          ><Right sw={'1'}/></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
          <div
            className={`absolute justify-center items-center transition duration-500 hidden group-hover:flex hover:bg-white cursor-pointer
           left-10 sm:left-[100px] md:left-[125px] lg:left-[350px] top-6 sm:top-44 z-40 size-14 rounded-full bg-[#f5b754]`}
            onClick={onClick}
          ><Left sw={'1'}/></div>
        );
      }

      const settings = {
        className: "relative group h-[450px] overflow-y-visible",
        centerMode: windowWidth < 1000? false : true,
        infinite: true,
        centerPadding:  windowWidth > 1000 && windowWidth < 1200? '100px' : '250px',
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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
    <div className='w-full h-[750px] flex flex-col gap-8 items-center bg-[#222222] pt-24'>
        <div className='flex flex-col gap-3 text-center'>
            <p className='text-[#f5b754] text-[10px] tracking-[10px]'>SELECT YOUR CAR</p>
            <p className='text-[35px] font-bold text-white'>Luxury <span className='text-[#f5b754]'>Car Fleet</span></p>
        </div>

<div className="slider-container w-screen h-[500px]">
      <Slider {...settings}>
      {
                    scrollCarInfo.map(item =>
                    <div className='max-w-5xl h-[400px] rounded-2xl px-4 sm:px-6 group/info'>
                        <div className='h-full relative bg-cover bg-center bg-no-repeat
                             rounded-2xl transition ease-in-out duration-300'
                        style={{backgroundImage: `url(${item.img})`}} >
                          <LuxuryCarInfo carName={item.name} seats={item.seats} price={item.price} bags={item.bags} />
                        </div>
                        
                    </div>)
                    
                }
      </Slider>
    </div>
    </div>
  )
}

export default LuxuryCarFleet