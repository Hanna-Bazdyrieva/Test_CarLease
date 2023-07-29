import { Suspense, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Navigation />
			{/* <HomePage /> */}
			{/* <Loader /> */}
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={
							// <PublicRoute restricted component={
							<HomePage />
							// } />
						}
					/>
					<Route
						path="/catalog"
						element={
							// <PublicRoute restricted component={
							<CatalogPage />
							// } />
						}
					/>
					<Route
						path="/favorites"
						element={
							// <PublicRoute restricted component={
							<FavoritesPage />
							// } />
						}
					/>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Suspense>
			{/* <div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1> */}
			{/* <button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button> */}
		</>
	);
}

export default App;
