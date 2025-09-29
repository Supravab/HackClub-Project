import './nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav() {
	const navigate = useNavigate(); 
	return (
		<div className="nav">
			<div className="logo" onClick={() => navigate('/')}><img src="./MindEase-Nepal.png" alt="MindEase Logo" /></div>
			<div className="nav-container">
				<Link to="/profile" className="buttn">
					Profile
				</Link>
				<Link to="/explore" className="buttn">
					Explore
				</Link>
				<Link to="/sessions" className="buttn">
					Sessions
				</Link>
			</div>
		</div>
	);
}
export default Nav;
