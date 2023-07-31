import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import {
	// persistor,
	store,
} from "./redux/store";
import App from "./App.jsx";

import "./index.css";

export class ErrorBoundary extends Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		console.log("error :>> ", error);
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<h1>So sad... Error happened...</h1>
				</>
			);
		}

		// eslint-disable-next-line react/prop-types
		return this.props.children;
	}
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
				{/* </PersistGate> */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
