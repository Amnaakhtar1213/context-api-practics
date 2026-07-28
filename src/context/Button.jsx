import React from 'react'
import {ThemeDataContext} from './ThemeContext'
import { useContext } from 'react'

const Button = () => {
 const [theme, setTheme] = useContext(ThemeDataContext)

  const change = () => {
   setTheme('dark')
  }
  return (
    <div>
      <button onClick={change} className="bg-gray-500 px-5 py-2 mt-10 rounded-2xl ml-10 text-white font-bold">Change Theme</button>
    </div>
  )
}

export default Button
