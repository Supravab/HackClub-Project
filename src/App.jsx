import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifyOtp from './pages/verifyOtp'
import ProtectedRoute from './routes/protectedroutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path='*' element={<Login />} />
        {/* Protected Routes--->  */}
      </Routes>
    </Router>
  )
}

export default App
