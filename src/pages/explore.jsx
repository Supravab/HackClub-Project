import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import './explore.css';

function Explore(type) {
	const navigate = useNavigate();
	const [stories, setStories] = useState([
		{
			id: 1,
			author: 'Anonymous',
			date: '2025-09-28',
			content:
				'I overcame my fear of public speaking and it changed my life!',
		},
		{
			id: 2,
			author: 'Anonymous',
			date: '2025-09-27',
			content:
				'Started volunteering in my community and found true happiness.',
		},
		{
			id: 3,
			author: 'Anonymous',
			date: '2025-09-25',
			content:
				'Tried meditation for a month, and it really helped me focus.',
		},
	]);

	const [newStory, setNewStory] = useState('');

	const handleDelete = (id) => {
		const updatedStories = stories.filter((story) => story.id !== id);
		setStories(updatedStories);
	};

	const handlePostStory = () => {
		if (!newStory.trim()) return;

		const story = {
			id: Date.now(),
			author: 'Anonymous',
			date: new Date().toISOString().split('T')[0],
			content: newStory,
		};

		setStories([story, ...stories]); // newest first
		setNewStory('');
	};

	return (
		<div className="page-container">
			<Nav />

			<div className="explore-page">
				<h1>Inspiring Stories</h1>

				<div className="post-story">
					<textarea
						placeholder="Share your inspiring story..."
						value={newStory}
						onChange={(e) => setNewStory(e.target.value)}
					/>
					<button onClick={handlePostStory} className="post-btn">
						Post
					</button>
				</div>

				<div className="stories-feed">
					{stories.map((story) => (
						<div key={story.id} className="story-card">
							<div className="story-header">
								<span className="story-author">
									{story.author}
								</span>
								<i
									className={
										type.type == 'volunteer'
											? 'delete-icon'
											: 'dondisplay'
									}
									onClick={() => handleDelete(story.id)}
								>
									<FaTrash
										color="#f44336"
										className={
											type.type == 'volunteer'
												? ''
												: 'dondisplay'
										}
									/>
								</i>

								<span className="story-date">{story.date}</span>
							</div>

							<div className="story-content">{story.content}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Explore;
