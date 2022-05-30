import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index'
import SignIn from './Pages/Sign-in/index'

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
