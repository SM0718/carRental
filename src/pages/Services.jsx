import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])
  

  return (
    <>
    </>
  )
}

export default Services