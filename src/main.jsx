import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

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
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>
);
