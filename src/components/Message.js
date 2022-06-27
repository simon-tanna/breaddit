import React from "react";

function Message({ message }) {
	return (
		<>
			<h4>{`Subject: ${message.subject}`}</h4>
			<p>{message.text}</p>
			<p>{message.username}</p>
		</>
	);
}

export default Message;
