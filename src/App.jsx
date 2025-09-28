import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifyOtp from './pages/verifyOtp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<VerifyOtp />} />
      </Routes>
    </Router>
  )
}

export default App
