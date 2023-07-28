import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HomeEl from "../components/Home/HomeEl";

const HomePage = () => {
	return (
		<div>
			<HomeEl />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default HomePage;
