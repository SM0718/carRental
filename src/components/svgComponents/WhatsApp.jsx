import React from 'react'

function WhatsApp({black, w, h, sw}) {
  return (
    <svg width={w? w : "20px"} height={h? h : "20px"} viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs></defs>
                <path className="cls-1" fill={black ? '#f5b754' : '#fff'} stroke={black ? "#000" : "#fff"} strokeWidth={sw? sw : "2"} d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"/>
              </svg>
  )
}

export default WhatsApp