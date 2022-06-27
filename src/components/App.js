import Messages from "./Messages";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import seedMessages from "../data/message-seed.json";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import MessageDetail from "./MessageDetail";

function App() {
	const [loggedInUser, setLoggedInUser] = useState("");
	const [messageList, setMessageList] = useState([]);

	const activateUser = (username) => {
		setLoggedInUser(username);
	};

	const addMessage = (text, subject) => {
		const message = {
			subject: subject,
			text: text,
			username: loggedInUser,
			id: messageList[0].id + 1,
		};
		setMessageList((messageList) => [message, ...messageList]);
	};

	useEffect(() => {
		// API fetch to go here
		setMessageList(seedMessages);
	}, []);

	return (
		<div className="App">
			<h1>Breaddit</h1>

			{/* {!loggedInUser && <Login activateUser={activateUser} />}
			{loggedInUser && <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} />}
			<Messages messageList={messageList} /> */}

			{/* browser router wraps all the components in the browser router  */}
			<Router>
				<Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
				<Routes>
					<Route
						path="messages"
						element={<Messages messageList={messageList} />}
					/>
					<Route path="/" element={<Navigate to="messages" replace />} />
					<Route
						path="messages/:messageId"
						element={<MessageDetail messageList={messageList} />}
					/>
					<Route path="about" element={<About />} />
					<Route path="login" element={<Login activateUser={activateUser} />} />
					<Route
						path="messages/new"
						element={
							loggedInUser ? (
								<MessageForm
									loggedInUser={loggedInUser}
									addMessage={addMessage}
								/>
							) : (
								<Navigate to="/login" replace />
							)
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
