import React from 'react'

function YoutubePlayer() {
  return (
    
    <iframe
    className='w-[500px] h-[315px] md:w-[660px] md:h-[415px]'
    src="https://www.youtube.com/embed/1LxcTt1adfY?si=5wo8yW3MHWdxohtg" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
    </iframe>
   
  )
}

export default YoutubePlayer