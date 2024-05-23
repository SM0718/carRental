import React from 'react'
import { NavLink } from 'react-router-dom'

function ResponsiveNav({className}) {
  const headerItems = [
    {
        name: 'Home',
        slug: '/',
        subItems: {
            item1: {
                name: 'Slider',
                slug: '#'
            },
            item2:  {
                name: 'Image',
                slug: '#'
            },
            item3:  {
                name: 'Video',
                slug: '#'
            },
            item4: {
                name: 'Slideshow',
                slug: '#'
            },
        }
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
        slug: '/cars',
        subItems: {
            item1: {
                name: 'Car Grid',
                slug: '#'
            },
            items2: {
                name: 'Cars Listings',
                slug: '#'
            },
        }
    },
    {
        name: 'Pages',
        slug: '/pages',
        subItems: {
            item1: {
                name: 'Team',
                slug: '#'
            },
            items2: {
                name: 'FAQ',
                slug: '#'
            },
            items3: {
                name: 'Testmonials',
                slug: '#'
            },
        }
    },
    {
        name: 'Contact',
        slug: '/contact'
    }
]



  return (
    <div className={`${className} bg-[#282828] w-full left-0 top-16 z-40 flex-col justify-center items-center text-[14px] absolute` }>
            {
                headerItems.map(items =>
                    <NavLink to={items.slug} className={({isActive}) => `${isActive ? "text-[#cb8351] font-semibold" : "text-white"} w-full py-4 px-4`} key={items.name}>{items.name}</NavLink>
                )
            }
        </div>
  )
}

export default ResponsiveNav