import Messages from "./Messages";
import Message from "./Message";
import MessageForm from "./MessageForm";
import Navigation from "./Navigation";


function App() {
	return (
		<div className="App">
			<h1>Breaddit</h1>
			<Navigation />
			<Messages />
			<Message />
			<MessageForm />
		</div>
	);
}

export default App;
