import './nav.css';

function Nav(id) {
	if (id.id == 'user')
		return (
			<div className="nav">
				<div className="container">
					<div className="buttn">Profile</div>
					<div className="buttn">Explore</div>
					<div className="buttn">Sessions</div>
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
	else if (id.id == 'volunteer')
		return (
			<div className="nav">
				<div className="container">
					<div className="buttn">Profile</div>
					<div className="buttn">Unscheduled</div>
					<div className="buttn">Scheduled</div>
					<div className="buttn">Explore</div>
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
	else {
		console.error(id.id + 'is not a valid id');
	}
}
export default Nav;
