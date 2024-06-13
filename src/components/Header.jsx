import React, {useState} from 'react'
import Logo from './Logo'
import {NavLink} from 'react-router-dom'
import Button from './Button'
import ResponsiveNav from './ResponsiveNav'
import Phone from './svgComponents/Phone'
import Hamburger from './svgComponents/Hamburger'
import ProgressBar from './ProgressBar'

function Header() {

    const [color, setColor] = useState(false)
    const [show, setShow] = useState(false)
    const [black, setBlack] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 90) {
        setColor(true)
    } else {
        setColor(false)
        setShow(false)
    }
    }
    window.addEventListener('scroll', changeColor)

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
    <div className={`${color? "bg-black/75 py-6" : ""} w-screen fixed z-40 flex items-center xl:justify-evenly justify-between px-8 py-4`}>
        <div className='w-full md:w-5/6 mx-auto z-30 flex items-center relative'>
           <Logo className={'w-[130px] h-[18.6px]'}/>

           <div className='w-5/6 flex justify-end'>
            <Button onClick={() => setShow(!show)} className={'xl:hidden flex'}>
                <Hamburger />
            </Button>
            
        <div className='w-1/2 hidden xl:flex justify-evenly gap-6'>
           <div className=' flex items-center gap-8 text-sm'>
            {
                headerItems.map(items =>
                    <NavLink to={items.slug} className={({isActive}) => `${isActive ? "text-[#cb8351] font-semibold" : "text-white font-thin"} hover:text-[#cb8351] font-outfit`} key={items.name}>{items.name}</NavLink>
                )
            }
        </div>
        <div className='flex items-center gap-4 text-white '>
            <Button onMouseOver={() => setBlack(true)}
                    onMouseLeave={() => setBlack(false)}
            className={'rounded-full border-[1px] border-[#e4ac52] cursor-default p-1 hover:bg-[#e4ac52]'}>
            <Phone black={black}/>
            </Button>
            <div className='flex flex-col w-24'>
                <p className='text-[12px]'>Need Help?</p>
                <p className='cursor-pointer hover:text-[#cb8351] font-semibold'>800 499 999</p>
            </div>
            
        </div> 
        
        </div> 
           </div>
        
           <ProgressBar  className={`${color? "flex" : "hidden"} absolute -bottom-[630px] md:-bottom-[600px] md:-right-[10px] lg:-right-[100px]`}/>
        </div>
        

        <ResponsiveNav className={`${show? 'flex' : 'hidden'} z-50`}/>
        
    </div>
  )
}

export default Header