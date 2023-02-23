import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Layout from './pages/layout'
import reportWebVitals from './reportWebVitals'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
);



reportWebVitals();