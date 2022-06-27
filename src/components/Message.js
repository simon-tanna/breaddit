import React from "react";
import { Link } from "react-router-dom";

function Message({ message }) {
	return (
		<>
			<h4>{`Subject: ${message.subject}`}</h4>
			<p>{message.text}</p>
			<p>{message.username}</p>
			<Link to={`${message.id}`}>View Message</Link>
		</>
	);
}

export default Message;
