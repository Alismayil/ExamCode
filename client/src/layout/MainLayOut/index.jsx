import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { Toaster } from 'react-hot-toast'

function MainLayOut() {
  return (
   <>
  <Toaster
  position="top-left"
  reverseOrder={false}
/>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MainLayOut
