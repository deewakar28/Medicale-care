import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar";
import Section1 from "./components/section1.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Section1/>
    </>
  )
}

export default App
