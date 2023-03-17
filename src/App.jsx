import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
//Components

import MainLayout from './components/shared/MainLayout'
import Home from './components/pages/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<MainLayout />}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>

      
    </div>
  )
}

export default App
