import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyOtp from './pages/VerifyOtp';
import UserProfile from './pages/UserProfile.jsx';
import JoinSession from './pages/JoinSession';
import Sessions from './pages/Sessions.jsx';
import Explore from './pages/explore';
import NotFound from './components/404.jsx';

import ProtectedRoute from './routes/protectedroutes';

const user = localStorage.getItem("userType");

function App() {
	return (
		<Router>
			<Routes>
				{/* Public routes */}
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/otp" element={<VerifyOtp />} />
				<Route path="/join-session" element={<JoinSession />} />

				{/* Protected routes */}
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<UserProfile type={user} />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/sessions"
					element={
						<ProtectedRoute>
							<Sessions type={user} />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/explore"
					element={
						<ProtectedRoute>
							<Explore type={user} />
						</ProtectedRoute>
					}
				/>
					{/* 404 :) */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
