import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test_react'

function App() {
  return (
    <>
      <Link to="/" >🏠 Home 🐈</Link> | {" "}
      <Link to="/Test_react" >🗒️ 시험!! ✏️</Link>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test_react" element={<Test />} />
    </Routes>
    </>
  )
}

export default App;
