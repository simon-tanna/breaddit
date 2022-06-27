import React from "react";
import { useParams } from "react-router-dom";

function MessageDetail({ messageList }) {
	const params = useParams();

	const getMessage = (id) => {
		return messageList.find((message) => message.id === parseInt(id));
	};

	const message = getMessage(params.messageId);

	return (
		<>	
			<h4>{`Subject: ${message.subject}`}</h4>
			<p>{message.text}</p>
			<p>{message.username}</p>
		</>
	);
}

export default MessageDetail;
