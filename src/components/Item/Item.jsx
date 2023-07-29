import PropTypes from "prop-types";

import styles from "./Item.module.css";
import car from "../../assets/car";

function Item() {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img
					className={styles.image}
					src={car.img}
					alt={`${car.make} ${car.model} ${car.year} car photo`}
				/>
			</div>
			<div className={styles.titleContainer}>
				<p>
					{car.make} <span className={styles.accent}>{car.model}</span>,{" "}
					{car.year}
				</p>
				<p>price</p>
			</div>
		</div>
	);
}

Item.propTypes = {
	img: PropTypes.string,
};
export default Item;
