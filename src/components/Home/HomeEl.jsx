// import React from "react";
import styles from "./HomeEl.module.css";

function HomeEl() {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				Rent a <span className={styles.accent}>CAR</span> with us and dare{" "}
				<span className={styles.accent}>ANITHING</span>
			</div>
			{/* <img src="/public/hero.jpg" alt="Speedomter photo" /> */}
		</div>
	);
}

export default HomeEl;
