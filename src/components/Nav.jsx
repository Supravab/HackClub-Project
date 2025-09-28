import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="nav">
			<div className="container">
				<Link to="/profile" className="buttn">
					Profile
				</Link>
				<Link to="/explore" className="buttn">
					Explore
				</Link>
				<Link to="/sessions" className="buttn">
					Sessions
				</Link>
				<svg
					className="outline"
					overflow="visible"
					viewBox="0 0 400 60"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						className="rect"
						pathLength={100}
						x={0}
						y={0}
						width={400}
						height={60}
						fill="transparent"
						strokeWidth={5}
					/>
				</svg>
			</div>
		</div>
	);
}
export default Nav;
