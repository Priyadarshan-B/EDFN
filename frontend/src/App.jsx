import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav />
      EDFN TECHNOLOGIES
      <h1 className='text-lg text-green-600 '>skjdnhg</h1>
    </>
  )
}

export default App
