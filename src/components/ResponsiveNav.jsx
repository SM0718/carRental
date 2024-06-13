import React from 'react'
import { NavLink } from 'react-router-dom'

function ResponsiveNav({className}) {
  const headerItems = [
    {
        name: 'Home',
        slug: '/',
    },
    {
        name: 'About',
        slug: '/about',
    },
    {
        name: 'Services',
        slug: '/services',
    },
    {
        name: 'Cars',
        slug: '/cars/car-detail/Bugatti-Mistral-W16',
    }
]



  return (
    <div className={`${className} bg-[#282828] w-full left-0 top-16 z-50 flex-col justify-center items-center text-[14px] absolute` }>
            {
                headerItems.map(items =>
                    <NavLink to={items.slug} className={({isActive}) => `${isActive ? "text-[#cb8351] font-semibold" : "text-white"} w-full py-4 px-4`} key={items.name}>{items.name}</NavLink>
                )
            }
        </div>
  )
}

export default ResponsiveNav