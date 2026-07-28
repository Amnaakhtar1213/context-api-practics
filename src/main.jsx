import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeContext>
    <App />
  </ThemeContext>
  </BrowserRouter>
  
)
