import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import './sessions.css';
import { FaTrash } from 'react-icons/fa';

function Sessions({ type }) {
	const navigate = useNavigate();

	// Dummy sessions data (stateful now for deletion)
	const [sessions, setSessions] = useState([
		{
			id: 1,
			name: 'Math Peer Group',
			category: 'Students',
			language: 'Nepali',
			time: '10:00 AM',
			status: 'Upcoming',
		},
		{
			id: 2,
			name: 'Wellness Talk',
			category: "Migrants' Wives",
			language: 'Maithili',
			time: '11:30 AM',
			status: 'Upcoming',
		},
		{
			id: 3,
			name: 'Earthquake Survivors Support',
			category: 'Earthquake Survivors',
			language: 'Tamang',
			time: '2:00 PM',
			status: 'Upcoming',
		},
	]);

	const handleDelete = (sessionId) => {
		// Filter out the session with the given id
		const updatedSessions = sessions.filter((s) => s.id !== sessionId);
		setSessions(updatedSessions);
	};

	return (
		<div className="page-container">
			<div className="content-wrapper">
				<Header />
				<Nav />

				<div className="sessions-page">
					<h1>Sessions</h1>
					{sessions.length > 0 ? (
						sessions.map((session) => (
							<div key={session.id} className="session-card">
								{type === 'volunteer' && (
									<div
										className="delete-icon"
										onClick={() => handleDelete(session.id)}
									>
										<FaTrash color="#f44336" />
									</div>
								)}
								<div className="session-info">
									<span className="session-name">
										{session.name}
									</span>
									<span className="session-category">
										{session.category}
									</span>
									<span className="session-language">
										{session.language}
									</span>
									<span className="session-time">
										{session.time}
									</span>
								</div>
								<div className="session-buttons">
									<button
										className="join-btn"
										onClick={() => navigate('/call')}
									>
										Join
									</button>
									<button
										className="detail-btn"
										onClick={() =>
											console.log(
												'View details',
												session.id
											)
										}
									>
										Details
									</button>
								</div>
							</div>
						))
					) : (
						<p>No sessions available</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Sessions;
