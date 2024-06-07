import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {carLogos} from '../carInfos/carLogos'

function CarLogos() {
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
        slidesToShow: windowWidth > 600 && windowWidth < 1500? 3 : windowWidth < 600? 3 : 6,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
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
    <div className="w-full flex justify-center items-center bg-[#1b1b1b]">
        <div className="slider-container w-full md:w-4/5 h-[100px] bg-[#222222] pt-3">
          <Slider
            {...settings}>
                {
                    carLogos.map(item => <div className="w-[151px] h-[75px] my-auto">
                        <img className="w-[151px] h-[75px] hover:grayscale" src={item.pic}/>
                    </div>)
                }
        </Slider>
    </div>
    </div>
    
  )
}

export default CarLogos