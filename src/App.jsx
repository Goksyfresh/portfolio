import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Projects from './components/Projects'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPage'
import Lenis from 'lenis'

function App() {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {

});

  return (
    <>
    
     <Navbar/>
  
     
     <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/bio" element={<Bio/>}/>
       <Route path="/experience" element={<Experience/>}/>
        <Route path="/blog" element={<Blog/>}/>
        
        <Route path="/blog/:slug" element={<BlogPost/>} />

  
   
     </Routes>
    
    </>
  )
}

export default App
