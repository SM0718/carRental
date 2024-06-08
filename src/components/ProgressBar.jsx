import React, { useEffect, useState } from 'react';
import ArrowUp from '../components/svgComponents/ArrowUp';

function ProgressBar({className}) {

  const [scrollTop, setScrollTop] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

    const circleStyle = {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: `conic-gradient(#f5b754 ${(scrollTop/100) * 360}deg, #1b1b1b 0deg)`,
        alignItems: 'center',
        justifyContent: 'center',
      };

  return (
    <div onClick={() => scrollToTop()} className={`${className} rounded-full cursor-pointer`} style={circleStyle}>
        <div className='size-11 bg-[#222222] rounded-full flex justify-center items-center'>
            <ArrowUp />
        </div>
    </div>
  )
}

export default ProgressBar