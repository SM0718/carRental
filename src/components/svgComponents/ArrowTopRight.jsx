import React from 'react'

function ArrowTopRight({w,h,sw}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w? w : "24"} height={h? h : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width={sw? sw : "2"} stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  )
}

export default ArrowTopRight