import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar.component'

function App () {
  return (
    <div className="App">
      <Navbar/>

      <Outlet />
    </div>
  )
}

export default App
