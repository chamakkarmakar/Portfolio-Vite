import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <div className='h-[800px] bg-cover bg-center bg-no-repeat mt-[-100px]' style={{ backgroundImage: `url("https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=740&t=st=1717821397~exp=1717821997~hmac=ccde5b1a6f87a646e14f7dd4f563d12ca77485ddd4c5a81eb10a993cc2097c80")` }}>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
