import React from "react";
import { Link, useParams } from "react-router-dom";

function MessageDetail({ messageList }) {
	const params = useParams();
	console.log(params)

	const getMessage = (id) => {
		return messageList.find((message) => message.id === parseInt(id));
	};

	const message = getMessage(params.messageId);

	console.log(message)

	return (
		<>
			{message ? (
				<>
					<h4>{`Subject: ${message.subject}`}</h4>
					<p>{message.text}</p>
					<p>{message.username}</p>
				</>
			) : (
				<>
					<p>Message Not Found</p>
					<Link to="/messages">Back to messages</Link>
				</>
			)}
		</>
	);
}

export default MessageDetail;
