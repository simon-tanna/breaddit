import Messages from "./Messages";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";
import Login from "./Login";
import React, { useEffect, useReducer, useState } from "react";
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
import { reducer } from "../utils/reducer";

function App() {
	// implement reducer function
	const initialState = {
		messageList: [],
		loggedInUser: "",
	};

	// reducer is executed when
	// state returns array with 2 elements- store (the name for the state) and dispatch (the function that triggers the reducer function, it's argument is action)
	const [store, dispatch] = useReducer(reducer, initialState);
	const { messageList, loggedInUser } = store;

	// const [loggedInUser, setLoggedInUser] = useState("");
	// const [messageList, setMessageList] = useState([]);

	const activateUser = (username) => {
		setLoggedInUser(username);
	};

	const addMessage = (text, subject) => {
		const message = {
			subject: subject,
			text: text,
			username: loggedInUser,
			id: nextId(messageList),
		};
		dispatch({
			type: "addMessage",
			data: message,
		});
		// setMessageList((messageList) => [message, ...messageList]);
	};

	const nextId = (data) => {
		if (data.length === 0) return 1;
		const sortData = data.sort((a, b) => a.id - b.id);
		const nextId = sortData[sortData.length - 1].id + 1;
		return nextId;
	};

	useEffect(() => {
		// API fetch to go here
		// setMessageList(seedMessages);
		dispatch({
			type: "setMessageList",
			data: seedMessages,
		});
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
					<Route path="messages">
						General route created with nested routes underneath
						<Route index element={<Messages messageList={messageList} />} />
						<Route
							path=":messageId"
							element={<MessageDetail messageList={messageList} />}
						/>
						<Route
							path="new"
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
					</Route>
					<Route path="/" element={<Navigate to="messages" replace />} />
					<Route path="about" element={<About />} />
					<Route path="login" element={<Login activateUser={activateUser} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
