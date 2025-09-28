import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyOtp from './pages/VerifyOtp.jsx';
import UserProfile from './pages/UserProfile.jsx';
function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/profile"
					element={<UserProfile type="volunteer" />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/otp" element={<VerifyOtp />} />
				<Route path="*" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
