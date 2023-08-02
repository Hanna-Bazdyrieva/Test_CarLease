/* eslint-disable no-mixed-spaces-and-tabs */
import { NavLink } from "react-router-dom";
import { BsCarFront } from "react-icons/bs";

import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<>
			<div className="container">
				<div className="section">
					<div className={styles.headerNav}>
						<NavLink className={styles.logo} to="/">
							<BsCarFront />
							<h5>CarLease</h5>
						</NavLink>
						<div className={styles.linkContainer}>
							<NavLink
								style={({ isActive }) =>
									isActive
										? {
												color: "rgb(240, 83, 10)",
												textDecorationLine: "underline",
										  }
										: { color: "#121417" }
								}
								className={styles.link}
								to="/"
							>
								Home
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive
										? {
												color: "#0b44cd",
												textDecorationLine: "underline",
										  }
										: { color: "#121417" }
								}
								className={styles.link}
								to="/catalog"
							>
								Catalog
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive
										? {
												color: "#0b44cd",
												textDecorationLine: "underline",
										  }
										: { color: "#121417" }
								}
								className={styles.link}
								to="/favorites"
							>
								Favorites
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navigation;
