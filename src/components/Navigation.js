import React from "react";
import { Link } from "react-router-dom";

function Navigation({ loggedInUser, activateUser }) {
	const logOut = (event) => {
		event.preventDefault();
		activateUser("");
	};

	return (
		<nav>
			<Link to="/messages">Home</Link>
			<Link to="/about">About</Link>
			{loggedInUser ? (
				<>
					<Link to="/messages" onClick={logOut}>
						Log Out
					</Link>
					{loggedInUser}
				</>
			) : (
				<>
					<Link to="/login">Login</Link>
					<Link to="/login">Sign Up</Link>
				</>
			)}
		</nav>
	);
}

export default Navigation;
