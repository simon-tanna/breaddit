import React from "react";

function Login() {
	return (
		<div>
			<form>
				<label>Username:</label>
				<input type="text" name="user" id="user" />
				<label>Password:</label>
				<input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
			</form>
		</div>
	);
}

export default Login;
