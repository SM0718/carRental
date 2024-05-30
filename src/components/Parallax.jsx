import React from 'react'

function Parallax({className, children, bgImg}) {
  return (
    <div className={`${className} z-0 relative before:content-[''] before:absolute before:h-full before:w-full
      before:bg-black/50 before:-z-10
    `} style={{backgroundImage: `url(${bgImg})`}}>
      {children}
    </div>
  )
}

export default Parallax