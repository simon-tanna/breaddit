import React from "react";

function Login() {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit clicked");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input type="text" name="user" id="user" />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" name="password" id="password" />
				</div>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}

export default Login;