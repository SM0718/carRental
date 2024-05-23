import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import Button from './Button';

const YouTubePlayer = ({setIsOpen}) => {
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
    height: '390',
    width: '440',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div>
      <YouTube
        videoId="1LxcTt1adfY"
        opts={opts}
        onReady={onReady}
      />

      <Button onClick={() => setPlaying(!playing)}
      className={'absolute top-10 right-10 text-white size-8 border-2 border-[#f5b754] rounded-full'}
      >X</Button>
    </div>
  );
};

export default YouTubePlayer;
