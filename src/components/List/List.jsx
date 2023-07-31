import PropTypes from "prop-types";

import Item from "../Item/Item";

import styles from "./List.module.css";

function List({ cars, openModal }) {
	return (
		<div className={styles.container}>
			{cars.map((car) => (
				<Item car={car} key={car.id} openModal={openModal} />
			))}
		</div>
	);
}

List.propTypes = {
	cars: PropTypes.array,
	openModal: PropTypes.func,
};

export default List;
