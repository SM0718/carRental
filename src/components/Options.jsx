import React from 'react'

function Options({options, className, ...props}) {
  return (
    <select className='bg-[#222222] hover:text-[#f5b754] w-full lg:w-1/6' {...props}>
        {
            options.map(items => <option className='hover:bg-[#f5b754]'>
                {
                    items
                }
            </option>)
        }
    </select>
  )
}

export default Options