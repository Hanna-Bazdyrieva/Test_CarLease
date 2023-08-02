import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";

import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

function App() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
