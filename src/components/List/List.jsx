import PropTypes from "prop-types";
import styles from "./List.module.css";

import Item from "../Item/Item";

function List({ cars }) {
	return (
		<div className={styles.container}>
			{cars.map((car) => (
				<Item car={car} key={car.id} />
			))}
		</div>
	);
}

List.propTypes = {
	cars: PropTypes.array,
};

export default List;
