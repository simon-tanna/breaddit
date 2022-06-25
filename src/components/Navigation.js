import React from "react";

function Navigation({ loggedInUser }) {
	return (
		<nav>
			<a href="/">Home</a>
			<a href="/">About</a>
			{loggedInUser ? (
				<>
					<a href="/">Log Out</a>
					{loggedInUser}
				</>
			) : (
				<>
					<a href="/">Login</a>
					<a href="/">Sign Up</a>
				</>
			)}
		</nav>
	);
}

export default Navigation;
