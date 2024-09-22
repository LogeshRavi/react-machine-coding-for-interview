import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Theme-context'

const Navbar = () => {

    const {theme,toggleTheme} = useTheme()

    const toggleChange = () => {
        toggleTheme()
    }
  return (
    <nav className='navbar'>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        
        
            <label> 
                <input
                type='checkbox'
                onChange={toggleChange}
                checked={theme=="dark"}
                />
                Switch Dark Theme
            </label>
        </div>
    </nav>
  )
}

export default Navbar
