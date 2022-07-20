import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePerson from './pages/CreatePerson'
import Home from './pages/Home'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-person" element={<CreatePerson />} />
    </Routes>
  )
}

export default App
