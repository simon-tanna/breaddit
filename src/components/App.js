import Messages from "./Messages";
import Message from "./Message";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";
import Login from "./Login";
import React, { useState } from "react";

function App() {
	const [loggedInUser, setLoggedInUser] = useState("");

	const activateUser = (username) => {
		setLoggedInUser(username)
	}

	return (
		<div className="App">
			<h1>Breaddit</h1>
			<Navigation loggedInUser={loggedInUser} />
			<Messages />
			<Message />
			<MessageForm />
			<Login activateUser={activateUser} />
		</div>
	);
}

export default App;
