import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiRoutes } from '../config.js';
import './Login-Signup.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [scheduleMessage, setScheduleMessage] = useState(null);

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			toast.error('Please fill all fields');
			return;
		}

		setLoading(true);

		try {
			const res = await fetch(apiRoutes.auth.login, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			console.log('Login response:', data);

			if (!res.ok) {
				if (data.schedule) {
					setScheduleMessage(data); // show scheduled call
					return;
				}
				throw new Error(data.error || 'Login failed');
			}

			// success login
			toast.success('Login successful!');
			localStorage.setItem('userEmail', email);
			localStorage.setItem('authToken', data.authToken);
			setTimeout(() => navigate('/profile'), 1000);
		} catch (err) {
			toast.error(err.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	// --- Attention Required / Scheduled Call Section ---
	if (scheduleMessage) {
		return (
			<main className="home-page-container">
				<section className="login-form">
					<div className="info-card">
						<div className="attention-head">
							<Link to="/" onClick={window.location.reload}>
								<FaArrowLeft
									size={24}
									color="#88b89b"
									className="attention-back-icon"
								/>
							</Link>
							<h1>Attention Required</h1>
							<div className="space-filler"></div>
						</div>
						<p className="schedule_message">
							{scheduleMessage.error}
						</p>
						<p>
							<strong>Scheduled Call:</strong>{' '}
							{scheduleMessage.schedule.date} at{' '}
							{scheduleMessage.schedule.time}
						</p>
						<button
							onClick={() => {
								localStorage.setItem(
									'meetingLink',
									scheduleMessage.schedule.link
								);
								navigate('/join-session');
							}}
						>
							Join Call
						</button>
						<button onClick={() => setScheduleMessage(null)}>
							Back to Login
						</button>
					</div>
				</section>
			</main>
		);
	}

	// --- Normal Login Form ---
	return (
		<main className="home-page-container">
			<section className="mental-health-img ">
				<img src="./front.png" alt="Home-Img" />
			</section>

			<section className="login-form">
				<form onSubmit={handleLogin}>
					<h1>Login Here!</h1>
					<label>Email</label>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<button type="submit" disabled={loading}>
						{loading ? 'Logging in...' : 'Login'}
					</button>

					<p className="signup-director">
						Don't have an account?
						<span
							onClick={() => navigate('/signup')}
							style={{ color: '#4CAF50', cursor: 'pointer' }}
						>
							{' '}
							Sign Up{' '}
						</span>
					</p>
				</form>
			</section>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnHover
				draggable
			/>
		</main>
	);
}

export default Login;
