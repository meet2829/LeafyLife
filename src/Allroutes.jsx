import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Store from './Component/Store'
import Contact from './Component/Contact'
import About from './Component/About'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Store' element={<Store />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='*' element={<h1>this page is not found</h1>} ></Route>
    </Routes>
      
    </div>
  )
}

export default Allroutes
