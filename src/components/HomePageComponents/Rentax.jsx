import React, {useState} from 'react'
import Button from '../Button'
import GirlPic from '../GirlPic'
import YouTubePlayer from '../YoutubePlayer'

function Rentax() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full bg-black flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-0 py-36'>

        <div className='w-full lg:w-1/3 px-8 lg:px-2 flex flex-col gap-5'>
            <p className='text-[#f5b754] text-[10px] tracking-[5px]'>RENTAX</p>
            <div className='leading-tight'>
                <p className='text-white text-[35px] font-bold'>We Are More Than</p>
                <p className='text-[#f5b754] text-[35px] font-bold'>A Car Rental Company</p>
            </div>
            <p className='text-[#999999]'>
            Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna
            lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.
            </p>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-6'>
                    <Button className={'bg-[#222222] rounded-full p-1'}>
                    <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2.5" stroke="#f5b754">
                        <polyline points="44 24 28 40 20 32"/>
                        </svg>
                    </Button>
                    <p className='text-[#999999] text-[14px] font-outfit font-thin'>Sports and Luxury Cars</p>
                </div>
                <div className='flex items-center gap-6'>
                    <Button className={'bg-[#222222] rounded-full p-1'}>
                    <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2.5" stroke="#f5b754">
                        <polyline points="44 24 28 40 20 32"/>
                        </svg>
                    </Button>
                    <p className='text-[#999999] text-[14px] font-outfit font-thin'>Economy Cars items-center</p>
                </div>
            </div>
            <div className='mt-4'>
            <Button className={'transition ease-in-out bg-[#f5b754] flex justify-center gap-2 rounded-full px-10 py-4 hover:bg-white hover:-translate-y-1'}>Read More <p>&#8599;</p></Button>
            </div>
        </div>

        <GirlPic setIsOpen={setIsOpen}/>

    <div className={`z-50 ${isOpen? "fixed flex" : "hidden"}  justify-center items-center inset-0 bg-black/50 mx-auto my-auto`}>
      
      <YouTubePlayer setIsOpen={setIsOpen}/>
    </div>

    </div>
  )
}

export default Rentax