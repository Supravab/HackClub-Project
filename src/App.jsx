import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyOtp from './pages/VerifyOtp';
import UserProfile from './pages/UserProfile.jsx';
import JoinSession from './pages/JoinSession';
import Sessions from './pages/Sessions.jsx';
import Explore from './pages/explore';
const user = localStorage.getItem("userType");
import NotFound from './components/404.jsx';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/profile" element={<UserProfile type={user} />} />
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sessions" element={<Sessions type={user} />} />
				<Route path="/explore" element={<Explore type={user} />} />
				<Route path="/join-session" element={<JoinSession />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/otp" element={<VerifyOtp />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
export default App;
