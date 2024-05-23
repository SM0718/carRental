import React from 'react'

function Parallax({className, children, bgImg}) {
  return (
    <div className={className} style={{backgroundImage: `url(${bgImg})`}}>
    </div>
  )
}

export default Parallax