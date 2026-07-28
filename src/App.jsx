import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Button from './context/Button'
import Toast from './components/Toast'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';





const App = () => {


  return (
    <div>
    <Navbar />
    <Button />
    <Toast />
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About/>} />
    </Routes>
    </div>
  )
}

export default App
