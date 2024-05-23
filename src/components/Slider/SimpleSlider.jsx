import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import SliderCarInfo from './SliderCarInfo'
import { headCarInfo } from '../../carInfos/headCarInfo'

function SimpleSlider() {

 const [slideActive, setSlideActive] = useState(0)
 const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);

  const updateFunc = (e) => {
    setSlideActive(e)
    setUpdateCount(updateCount + 1)
  }
 
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: function(e) {
      updateFunc(e)
    },
    beforeChange: (next) => setSlideIndex(next)
  };
  
  return (
    <div className="slider-container relative">
      <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>
        {
          headCarInfo.map((item, index) => <SliderCarInfo key={item.name} index={index} currentSlide={index === slideActive ? true : false} name={item.name} price={item.price} backgroundImg={item.img}/>)
        }
      </Slider>
      <div className="w-screen absolute flex gap-2 justify-center bottom-8 z-30">
        {
        Array(3).fill("").map((_, index) => <span
        onClick={e => sliderRef.slickGoTo(index)}
        className={`${index === slideActive? "bg-[#f5b754] border-[#f5b754]" : "bg-white/0 border-white"} size-4 cursor-pointer
         rounded-full border-2 hover:bg-[#f5b754] hover:border-[#f5b754]
         `}>{_}</span>)
        }
      </div>
    </div>
  );
}

export default SimpleSlider;
