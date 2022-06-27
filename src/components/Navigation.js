import React from "react";
import { Link } from "react-router-dom";

function Navigation({ loggedInUser, activateUser }) {
	const logOut = (event) => {
		event.preventDefault();
		activateUser("");
	};

	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/">About</Link>
			{loggedInUser ? (
				<>
					<Link href="/" onClick={logOut}>
						Log Out
					</Link>
					{loggedInUser}
				</>
			) : (
				<>
					<Link href="/">Login</Link>
					<Link href="/">Sign Up</Link>
				</>
			)}
		</nav>
	);
}

export default Navigation;
