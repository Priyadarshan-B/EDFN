import { useState } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact' 
import Mission from './pages/mission/mission'
import Process from './pages/process/process'
import Services from './pages/services/services'
import Background from './components/background/bg'

function App() {

  return (
    <div className='text-black'>
      <Background/>
      <TopNav />
      <div
            id="home"
            className="section pt-20 h-screen flex items-center justify-center"
          >
            <Home />
          </div>
          <div
            id="about"
            className="section flex items-center justify-center "
          >
            <About />
          </div>
           <div
            id="services"
            className="section flex items-center justify-center "
          >
            <Services />
          </div> 
          <div
            id="process"
            className="section flex items-center justify-center "
          >
            <Process />
          </div>
           <div
            id="mission"
            className="section flex items-center justify-center "
          >
            <Mission />
          </div>
          <div
            id="contact"
            className="section   "
          >
            <Contact />
          </div>
    </div>
  )
}

export default App
