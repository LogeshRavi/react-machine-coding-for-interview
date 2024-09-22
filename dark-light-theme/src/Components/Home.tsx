import React from 'react'
import { useTheme } from '../Theme-context'

const Home = () => {
    const {theme} = useTheme()
    console.log("theeme",theme)
  return (

    <div className='page'>
        <h1>home</h1>
    <p>Welcome to Home Page</p>
    </div>
  )
}

export default Home