import { useState } from 'react';
import Nav from '../components/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import './userprofile.css';

const sampleSessions = [];
function UserProfile(type) {
	const [sessions, setSessions] = useState(sampleSessions);
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState('join');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedLanguage, setSelectedLanguage] = useState('');
	const [message, setMessage] = useState('');
	const userData = JSON.parse(localStorage.getItem('userData')) || {
		name: 'Guest',
		email: 'rijangautam@gmail.com',
	};
	const [sessionName, setSessionName] = useState('');

	const handleCreateSession = () => {
		const newSession = {
			id: Date.now(),
			name: sessionName, // session name from input
			category: selectedCategory,
			language: selectedLanguage,
			time: 'To Be Scheduled',
			status: 'Upcoming',
		};

		setSessions([...sessions, newSession]); // add new session to state
		setSessionName(''); // clear input
		setSelectedCategory(''); // optional: clear select
		setSelectedLanguage(''); // optional: clear select
	};

	// const userData = JSON.parse(localStorage.getItem('userData'));
	if (type.type == 'volunteer')
		return (
			<div className="page-container">
				<div className="content-wrapper">
					<div className="hadder d-flex justify-content-between">
						<Header />

						<div className="nav-container">
							<Nav />
						</div>
					</div>
					<div className="profile-card">
						<h1 className="profile-title">User Details:</h1>
						<div className="profile-info">
							<h2>
								Username:{' '}
								<span className="highlight">
									{userData.name}
								</span>
							</h2>
							<h3>
								Email:{' '}
								<span className="highlight">
									{userData.email}
								</span>
							</h3>
						</div>
					</div>

					<div className="tabs-container">
						{['join', 'sessions'].map((tab) => (
							<button
								key={tab}
								className={`tab-button ${activeTab === tab ? 'active-tab' : ''}`}
								onClick={() => {
									setActiveTab(tab);
									setMessage('');
								}}
							>
								{tab === 'join'
									? 'Create Sessions'
									: 'Scheduled Sessions'}
							</button>
						))}
					</div>

					<div className="tab-content">
						{message && (
							<div className="message-box">{message}</div>
						)}

						{activeTab === 'join' && (
							<div className="join-section">
								<h2>Create / Join Group</h2>
								<div className="form-group">
									<label htmlFor="category">
										Session Name:
									</label>
									<input
										type="text"
										id="sessionName"
										value={sessionName}
										onChange={(e) =>
											setSessionName(e.target.value)
										}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="category">Category:</label>
									<select
										id="category"
										value={selectedCategory}
										onChange={(e) =>
											setSelectedCategory(e.target.value)
										}
									>
										<option value="">
											Select Category
										</option>
										<option value="Students">
											Students
										</option>
										<option value="Migrants' Wives">
											Migrants' Wives
										</option>
										<option value="Earthquake Survivors">
											Earthquake Survivors
										</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="language">Language:</label>
									<select
										id="language"
										value={selectedLanguage}
										onChange={(e) =>
											setSelectedLanguage(e.target.value)
										}
									>
										<option value="">
											Select Language
										</option>
										<option value="Nepali">Nepali</option>
										<option value="Maithili">
											Maithili
										</option>
										<option value="Tamang">Tamang</option>
									</select>
								</div>

								<button
									className="primary-btn"
									onClick={handleCreateSession}
									disabled={
										!selectedCategory || !selectedLanguage
									}
								>
									Create Session
								</button>
							</div>
						)}

						{activeTab === 'sessions' && (
							<div className="sessions-section">
								<h2>Scheduled Sessions</h2>
								{sessions.map((session) => (
									<div
										key={session.id}
										className="session-card"
									>
										<div className="session-header">
											<span>{session.name}</span>
											<span>{session.category}</span>
											<span className="session-time">
												{session.time}
											</span>
										</div>
										<div className="session-info">
											<span>{session.language}</span>
											<span className="session-status">
												{session.status}
											</span>
										</div>
										<button
											onClick={() => navigate('/call')}
											className="join-btn"
										>
											Join
										</button>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	else if (type.type == 'user')
		return (
			<div className="page-container">
				<div className="content-wrapper">
					<div className="hadder d-flex justify-content-between">
						<Header />

						<div className="nav-container">
							<Nav id={type.type} />
						</div>
					</div>
					<div className="profile-card">
						<h1 className="profile-title">User Details:</h1>
						<div className="profile-info">
							<h2>
								Username:{' '}
								<span className="highlight">
									{userData.name}
								</span>
							</h2>
							<h3>
								Email:{' '}
								<span className="highlight">
									{userData.email}
								</span>
							</h3>
						</div>
					</div>

					<div className="tabs-container">
						{['join', 'sessions'].map((tab) => (
							<button
								key={tab}
								className={`tab-button ${activeTab === tab ? 'active-tab' : ''}`}
								onClick={() => {
									setActiveTab(tab);
									setMessage('');
								}}
							>
								{tab === 'join'
									? 'Diagnosis Result'
									: 'Private Sessions'}
							</button>
						))}
					</div>

					<div className="tab-content">
						{message && (
							<div className="message-box">{message}</div>
						)}
						{activeTab === 'join' && (
							<div className="join-section">
								<h2>Show / Check Results</h2>

								<div className="form-group">
									<label htmlFor="category">Category:</label>
									<label htmlFor="category">jAnxiety</label>
								</div>

								<div className="form-group">
									<label htmlFor="language">Language:</label>
									<label htmlFor="language">English</label>
								</div>
								<div className="form-group">
									<label htmlFor="language">
										Date of Diagnosis:
									</label>
									<label htmlFor="language">2082-03-01</label>
								</div>
							</div>
						)}
						{activeTab === 'sessions' && (
							<div className="sessions-section">
								<h2>Scheduled Sessions</h2>
								<button
									onClick={() => navigate('/call')}
									className="join-btn"
								>
									👑 Buy Subscription for Private Sessions 👑
								</button>
							</div>
						)}{' '}
					</div>
				</div>
			</div>
		);
	else {
		return console.error(type.type + ' is not a valid user');
	}
}
export default UserProfile;
