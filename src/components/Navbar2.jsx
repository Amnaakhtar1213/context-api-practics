import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Navbar2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)



  return (
    <div className="flex gap-4 font-bold">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h3>{theme}</h3>
    </div>
  )
}

export default Navbar2
 