import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
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
				'So on Wednesday, I (f) was picking up my husband from work because his car is broken. When I arrived, he was standing in front of the building, talking to his boss (m) and two co-workers (f, m). I joined them and we had a little chat, but then my husband started telling a story from vacation about how I stepped on a crab and got attacked. At the time, I didnt think much of it, I was just confused because I had no idea when it happened. After a moment, I realized it and said aloud, But it happened to you, not me.',
		},
		{
			id: 2,
			author: 'Anonymous',
			date: '2025-09-27',
			content:
				'I went to see Green Day and Billie Joe was constantly asking the crowd for hayoh’s and to see hands. A great crowd should be organic and not basically forced to do whatever the singer wants. If you gotta ask for a mosh pit to open up the crowd probably isn’t that into you',
		},
		{
			id: 3,
			author: 'Anonymous',
			date: '2025-09-25',
			content:
				'This is a big factor. Add in certain crowds tend to be a bit older now(Green Day works in this example), the more popular the band the more first timers and then there’s even more people who likely don’t attend concerts regularly at a huge stadium show.',
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
			<Header />
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
