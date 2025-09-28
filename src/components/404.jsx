import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
			<h1 className="text-9xl font-bold text-gray-800">404</h1>
			<p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
				Oops! Page not found
			</p>
			<p className="text-gray-500 mt-2">
				The page you’re looking for doesn’t exist or has been moved.
			</p>
			<Link to="/login" className="btn btn-primary">
				Go Back Home
			</Link>
		</div>
	);
}

export default NotFound;
