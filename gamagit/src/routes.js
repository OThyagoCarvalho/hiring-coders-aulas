import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home';

export default function SiteRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home title="Hello, "/>} />
        <Route path='/repositories' element={<Repositories/>} />
      </Routes>
    </BrowserRouter>    
  )
}