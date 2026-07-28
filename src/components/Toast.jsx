import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {

  const notify = () => {
   toast.warn(' Dangerous!!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",

});
  }
  return (
    <div>
      <h1 className="m-10 text-5xl ">React Toasting events</h1>
      <button className="bg-amber-400 text-black m-10 px-10 py-2 rounded-xl font-bold" onClick={notify}>Click me!</button>
      <ToastContainer />
    </div>
  )
}

export default Toast
