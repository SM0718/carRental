import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo({className}) {
  return (
    <NavLink to={'/'} className={className}>
        <img className='size-full' src='/./renax.png' alt='renax.png'/>
    </NavLink>
  )
}

export default Logo