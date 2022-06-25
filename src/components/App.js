import Messages from "./Messages";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import seedMessages from "../data/message-seed.json";

function App() {
	const [loggedInUser, setLoggedInUser] = useState("");
	const [messageList, setMessageList] = useState([]);

	const activateUser = (username) => {
		setLoggedInUser(username);
	};

	useEffect(() => {
		// API fetch to go here
		setMessageList(seedMessages);
	}, []);

	return (
		<div className="App">
			<h1>Breaddit</h1>
			<Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
			{!loggedInUser && <Login activateUser={activateUser} />}
			{loggedInUser && <MessageForm />}
			<Messages messageList={messageList} />
		</div>
	);
}

export default App;
