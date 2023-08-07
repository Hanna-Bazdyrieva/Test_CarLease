import PropTypes from "prop-types";

import Item from "../Item/Item";

import styles from "./List.module.css";

function List({ cars, favouriteChange, openModal }) {
	return (
		<ul className={styles.container}>
			{cars.map((car) => (
				<Item
					car={car}
					key={car.id}
					openModal={openModal}
					favouriteChange={favouriteChange}
				/>
			))}
		</ul>
	);
}

List.propTypes = {
	cars: PropTypes.array,
	favouriteChange: PropTypes.func,
	openModal: PropTypes.func,
};

export default List;
