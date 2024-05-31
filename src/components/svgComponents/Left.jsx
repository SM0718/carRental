import React from 'react'

function Left({w, h, fill, sw }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w || "24"} height={h || "24"} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" stroke-width={sw || "2"} stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  )
}

export default Left