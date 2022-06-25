import Messages from "./Messages";
import Message from "./Message";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";
import Login from "./Login";

function App() {
	return (
		<div className="App">
			<h1>Breaddit</h1>
			<Navigation />
			<Messages />
			<Message />
			<MessageForm />
			<Login />
		</div>
	);
}

export default App;
