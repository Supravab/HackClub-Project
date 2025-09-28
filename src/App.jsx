import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyOtp from './pages/VerifyOtp.jsx';
import Sessions from './pages/Sessions.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Explore from './pages/explore';
function App() {
	const user = 'user';
	return (
		<Router>
			<Routes>
				<Route path="/profile" element={<UserProfile type={user} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sessions" element={<Sessions type={user} />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/otp" element={<VerifyOtp />} />
				<Route path="*" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
