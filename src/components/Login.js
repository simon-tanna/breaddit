import React, { useEffect, useState } from "react";

function Login() {
	// create initial state for form fields
	const initialFormData = {
		user: "",
		password: "",
	};
	// set form data initial state invoking initialFormData
	const [formData, setFormData] = useState(initialFormData);

	// event handler for username input to setUser state
	const handleFormData = (event) => {
		setFormData({
			...formData, // previous state for username or password
			[event.target.name]: event.target.value, // new state for username or password
		});
	};

	// useEffect(() => {});

	// event handler for the form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
        setFormData(initialFormData) // cleaning the form data displayed
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						name="user"
						id="user"
						value={formData.user}
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
