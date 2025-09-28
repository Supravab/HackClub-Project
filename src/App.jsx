import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifyOtp from './pages/verifyOtp'
import UserProfile from './pages/UserProfile.jsx';
import JoinSession from './pages/JoinSession'

function App() {

  return (
    <Router>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path="/join-session" element={<JoinSession />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </Router>
  )

}

export default App;
