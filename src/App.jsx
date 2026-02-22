import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Course from './Course/Course'
import Footer from './Footer'
import HTML from "./Course/HTML.png"
import CSS from "./Course/CSS.png"
import JS from "./Course/JS.png"



function App() {


  return (
    <>
      <Course name="HTML" description="This is code io HTML Course"  image ={HTML} altName="HTML Course" price="$100"/>
      <Course name="CSS" description="This is code io CSS Course " image={CSS} altName="CSS Course" price="$120"/>
      <Course name="JavaScript" description="This is code io JavaScript Course" image={JS} altName="JavaScript Course" price="$150"/>
    </>
  )
}

export default App
