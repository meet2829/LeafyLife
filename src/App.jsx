import { useState } from 'react'
import './App.css'
import Allroutes from './Allroutes';
import Navbar from './Component/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Allroutes />
    </>
  )
}

export default App
