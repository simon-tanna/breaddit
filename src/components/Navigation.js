import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation({ loggedInUser, activateUser }) {

	// Use navigate hook has to be called outside of the logout function
	const navigate = useNavigate() 
	const logOut = (event) => {
		event.preventDefault();
		activateUser("");
		navigate("/messages")
	};

	return (
		<nav>
			<Link to="/messages">Home</Link>
			<Link to="/about">About</Link>
			{loggedInUser ? (
				<>
					<Link to="/messages/new">New Message</Link>
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
