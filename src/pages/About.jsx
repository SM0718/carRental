import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])
  

  return (
    <>
    </>
  )
}

export default About