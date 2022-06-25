import React from "react";

function Navigation({ loggedInUser, activateUser }) {
	const logOut = (event) => {
		event.preventDefault();
		activateUser("");
	};

	return (
		<nav>
			<a href="/">Home</a>
			<a href="/">About</a>
			{loggedInUser ? (
				<>
					<a href="/" onClick={logOut}>
						Log Out
					</a>
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
