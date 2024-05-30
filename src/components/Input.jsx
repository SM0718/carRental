import React, {useId} from 'react'

const Input = React.forwardRef(function Input({label, type, className, labelStyle, ...props}, ref) {
  const id = useId()
  return (
    <>
        {label && <label className={labelStyle} htmlFor={id}>{label}</label>}
        <input className={`${className}`} type={type} id={id} ref={ref} {...props}/>
    </>
  )
})

export default Input