import React from "react";
import Message from "./Message";

function Messages({ messageList }) {
	return (
		<>
			{messageList.map((message) => (
				<Message key={message.id} message={message} />
			))}
		</>
	);
}

export default Messages;
