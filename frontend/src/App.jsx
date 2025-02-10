import { useState } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact' 
import Mission from './pages/mission/mission'
import Process from './pages/process/process'
import Services from './pages/services/services'

function App() {

  return (
    <div className='text-black'>
      <TopNav />
      <div
            id="home"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D] "
          >
            <Home />
          </div>
          <div
            id="about"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D]"
          >
            <About />
          </div>
           <div
            id="services"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D]"
          >
            <Services />
          </div> 
          <div
            id="process"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D]"
          >
            <Process />
          </div>
           <div
            id="mission"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D]"
          >
            <Mission />
          </div>
          <div
            id="contact"
            className="section pt-32 h-screen flex items-center justify-center bg-[#12181D]"
          >
            <Contact />
          </div>
    </div>
  )
}

export default App
