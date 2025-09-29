import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Header from '../components/Header.jsx';
import './sessions.css';
import { FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // accessibility requirement

function Sessions({ type }) {
	const navigate = useNavigate();

	// Dummy sessions data (stateful now for deletion)
	const [sessions, setSessions] = useState([
		{
			id: 1,
			name: 'Math Peer Group',
			category: 'anxiety',
			language: 'Nepali',
			time: '10:00 AM',
			status: 'Expired',
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

	// Modal state
	const [selectedSession, setSelectedSession] = useState(null);

	const handleDelete = (sessionId) => {
		const updatedSessions = sessions.filter((s) => s.id !== sessionId);
		setSessions(updatedSessions);
	};

	const openDetails = (session) => {
		setSelectedSession(session);
	};

	const closeModal = () => {
		setSelectedSession(null);
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
										className="deletem-icon"
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
										onClick={() => navigate('/join-session')}
									>
										Join
									</button>
									<button
										className="detail-btn"
										onClick={() => openDetails(session)}
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

				{/* Modal */}

				<Modal
					isOpen={!!selectedSession}
					onRequestClose={closeModal}
					className="modal-content"
					overlayClassName="modal-overlay"
				>
					{selectedSession && (
						<div>
							<h2>{selectedSession.name}</h2>
							<p>
								<strong>Category:</strong>{' '}
								{selectedSession.category}
							</p>
							<p>
								<strong>Language:</strong>{' '}
								{selectedSession.language}
							</p>
							<p>
								<strong>Time:</strong> {selectedSession.time}
							</p>
							<p>
								<strong>Status:</strong>{' '}
								{selectedSession.status}
							</p>
							<button className="close-btn" onClick={closeModal}>
								Close
							</button>
						</div>
					)}
				</Modal>
			</div>
		</div>
	);
}

export default Sessions;
