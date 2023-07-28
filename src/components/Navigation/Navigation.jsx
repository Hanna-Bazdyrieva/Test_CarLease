// import clsx from 'clsx';
import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';

// import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import styles from "./Navigation.module.css";
// import { useMediaQuery } from 'react-responsive';
// import { useEffect } from 'react';

export const Navigation = () => {
	// const isAuth = useSelector(selectorIsLoggedIn);
	// const location = useLocation();

	// const isTablMob = useMediaQuery({ query: '(max-width: 1279px)' });
	// const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

	// useEffect(() => {
	//   isDesktop && handleToggleMenu(false);
	// }, [isDesktop, handleToggleMenu]);

	// const getActiveClass = ({ isActive }) =>
	//   clsx(
	//     !isAuth && d.link,
	//     !isAuth && isActive && d.active,
	//     isAuth && isActive && d.authLinkActive,
	//     isAuth && d.authLink
	//   );

	return (
		<>
			<div className={styles.headerNav}>
				<NavLink className={styles.logo} to="/">
					<h5>CarLease</h5>
				</NavLink>
				<div className={styles.linkContainer}>
					<NavLink className={styles.link} to="/">
						Home
					</NavLink>
					<NavLink className={styles.link} to="/catalog">
						Catalog
					</NavLink>
					<NavLink className={styles.link} to="/favorites">
						Favorites
					</NavLink>
				</div>

				{/* <NavLink
					// className={getActiveClass}
					state={location}
					to="/register"
				>
					Registration
				</NavLink> */}
			</div>
		</>
	);
};
