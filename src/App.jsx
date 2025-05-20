import { useState } from 'react'
import './App.css'
import Allroutes from './Allroutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Allroutes />
    </>
  )
}

export default App
