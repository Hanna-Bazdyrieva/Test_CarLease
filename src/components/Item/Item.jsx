import { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import Button from "../Button/Button";
import CardAttribute from "../CardAttribute/CardAttribute";

import addressShorten from "../../utils/addressShorten";
import shortestInArr from "../../utils/shortestInArr";

import styles from "./Item.module.css";
// import { markFavourite } from "../../services/mockAPI";

function Item({ car, openModal }) {
	const [favourite, setFavourite] = useState(car.favourite);
	const address = addressShorten(car);
	const shortestFunctionality = shortestInArr(car.functionalities);

	const handleFavourite = () => {
		setFavourite(!favourite);
		// markFavourite(car.id, favourite);
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.imgContainer}>
					{!favourite && (
						<MdOutlineFavoriteBorder
							onClick={() => handleFavourite()}
							className={styles.icon}
						/>
					)}
					{favourite && (
						<MdOutlineFavorite
							onClick={() => handleFavourite()}
							className={[styles.icon, styles.favourite].join(" ")}
						/>
					)}

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
					<p>{car.rentalPrice}</p>
				</div>

				<div className={styles.attributesContainer}>
					<div>
						<CardAttribute text={address[0]} />
						<CardAttribute text={address[1]} />
						<CardAttribute text={car.rentalCompany} />
					</div>

					<div>
						<CardAttribute text={car.type} />
						<CardAttribute text={car.model} />
						<CardAttribute text={car.id} />
						<CardAttribute text={shortestFunctionality} />
					</div>
				</div>
			</div>
			<Button
				text="Learn more ..."
				onClick={() => {
					console.log("Item, open modal");
					openModal(car);
				}}
			/>
		</div>
	);
}

Item.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.string,
		year: PropTypes.string,
		make: PropTypes.string,
		model: PropTypes.string,
		type: PropTypes.string,
		img: PropTypes.string,
		description: PropTypes.string,
		fuelConsumption: PropTypes.number,
		engineSize: PropTypes.string,
		accessories: PropTypes.array,
		functionalities: PropTypes.array,
		rentalPrice: PropTypes.string,
		rentalCompany: PropTypes.string,
		address: PropTypes.string,
		rentalConditions: PropTypes.string,
		mileage: PropTypes.number,
		favourite: PropTypes.bool,
	}),
	openModal: PropTypes.func,
};
export default Item;
