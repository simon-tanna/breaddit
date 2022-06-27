import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ activateUser }) {
	// create initial state for form fields
	const initialFormData = {
		username: "",
		password: "",
	};

	const navigate = useNavigate()
	// set form data initial state invoking initialFormData
	const [formData, setFormData] = useState(initialFormData);

	// event handler for username input to setUser state
	const handleFormData = (event) => {
		setFormData({
			...formData, // previous state for username or password
			[event.target.name]: event.target.value, // new state for username or password
		});
	};

	// event handler for the form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		activateUser(formData.username);
		setFormData(initialFormData); // cleaning the form data displayed
		navigate("/messages");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						value={formData.username}
						onChange={handleFormData}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formData.password}
						onChange={handleFormData}
					/>
				</div>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}

export default Login;
