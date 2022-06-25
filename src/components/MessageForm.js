import React, { useState } from "react";

function MessageForm({ loggedInUser, addMessage }) {
	const initialFormData = {
		subject: "",
		text: "",
	};
	const [formData, setFormData] = useState(initialFormData);
	const handleFormData = (event) => {
		setFormData({
			...formData, // previous state for username or password
			[event.target.name]: event.target.value, // new state for username or password
		});
	};

	// add a message to the list
	const handleSubmit = (event) => {
		event.preventDefault();
		if (formData.subject === "" || formData.text === "") {
			return console.log("Please don't leave an empty field");
		} else {
			addMessage(formData.subject, formData.text);
			return cleanMessageForm();
		}
	};

	const cleanMessageForm = () => {
		setFormData(initialFormData);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder={`Add your subject ${loggedInUser}`}
						value={formData.subject}
						onChange={handleFormData}
					/>
				</div>
				<div>
					<textarea
						type="text"
						name="text"
						id="text"
						placeholder="Add your text..."
						value={formData.text}
						onChange={handleFormData}
					/>
				</div>
				<button type="submit">Submit</button>
				<button onClick={cleanMessageForm}>Clear message fields</button>
			</form>
		</>
	);
}

export default MessageForm;
