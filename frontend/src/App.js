import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="/profile" element = {<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;