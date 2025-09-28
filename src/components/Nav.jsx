import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="nav">
			<div className="logo"></div>
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
