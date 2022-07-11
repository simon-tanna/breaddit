export const reducer = (state, action) => {
	// recieves current state and implements action we want to implement
	// action is object with 2 keys, type and value
	console.log(action);
	console.log(state);

	// the type key determines the action we are taking
	// the data key contains the data necessary to update the state

	switch (action.type) {
		// the function will return the updated state
		case "cleanState": {
			// state goes back to the previous state
			return {
				messageList: [],
				loggedInUser: "",
			};
		}
		case "setMessageList": {
			// populate the messageList array with the initial data
			return {
				...state,
				messageList: action.data,
			};
		}
		case "addMessage": {
			// recieves a message and adds to list
			return {
				...state,
				messageList: [action.data, ...state.messageList],
			};
		}
		case "setLoggedInUser": {
			// updatges the loggedinuser value
			return {
				...state,
				loggedInUser: action.data,
			};
		}
		default:
			return state;
	}
};
