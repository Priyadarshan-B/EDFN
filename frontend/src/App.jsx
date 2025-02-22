import { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Mission from './pages/mission/mission';
import Process from './pages/process/process';
import Services from './pages/services/services';
import '../src/components/loader/loader.css'
import Background from './components/background/bg';
import JoinUs from './pages/joinus/joinus';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="text-black">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {/* <Background /> */}
          <div>
            <TopNav />
          </div>
          <div id="home" className="section flex items-center justify-center">
            <Home />
          </div>
          <div id="about" className="section flex items-center justify-center">
            <About />
          </div>
          <div id="services" className="section flex items-center justify-center">
            <Services />
          </div>
          <div id="process" className="section flex items-center justify-center">
            <Process />
          </div>
          <div id="mission" className="section flex items-center justify-center">
            <Mission />
          </div>
          <div id="joinus" className="section flex items-center justify-center">
            <JoinUs />
          </div>
          <div id="contact" className="section flex items-center justify-center">
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
