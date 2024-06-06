import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import Button from './Button';

const YouTubePlayer = ({setIsOpen}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  useEffect(() => {
    if (playerRef.current) {
      if (playing) {
        playerRef.current.pauseVideo();
        setPlaying(!playing)
        setIsOpen(false)
      }  
    }
  }, [playing]);

  const opts = {
    height: windowWidth < 800? '290' : '375',
    width: windowWidth < 800? '320' : '420',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
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
    <div className='z-50 relative'>
      <YouTube
        videoId="1LxcTt1adfY"
        opts={opts}
        onReady={onReady}
      />

      <Button onClick={() => setPlaying(!playing)}
      className={'absolute z-50 -top-10 -right-50 text-white size-8 border-2 border-[#f5b754] rounded-full'}
      >X</Button>
    </div>
  );
};

export default YouTubePlayer;
