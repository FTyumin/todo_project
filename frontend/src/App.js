import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/home'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;