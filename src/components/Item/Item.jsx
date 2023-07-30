import PropTypes from "prop-types";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { IconContext } from "react-icons";

import styles from "./Item.module.css";
import addressShorten from "../../utils/addressShorten";
import CardAttribute from "../CardAttribute/CardAttribute";
import Button from "../Button/Button";
import shortestInArr from "../../utils/shortestInArr";
import { useState } from "react";

function Item({ car }) {
	const [favourite, setFavourite] = useState(false);
	const address = addressShorten(car);
	const shortestFunctionality = shortestInArr(car.functionalities);

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.imgContainer}>
					{!favourite && (
						<MdOutlineFavoriteBorder
							onClick={() => setFavourite(!favourite)}
							className={styles.icon}
						/>
					)}
					{favourite && (
						<MdOutlineFavorite
							onClick={() => setFavourite(!favourite)}
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
			<Button text="Learn more ..." />
		</div>
	);
}

Item.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.number,
		year: PropTypes.number,
		make: PropTypes.string,
		model: PropTypes.string,
		type: PropTypes.string,
		img: PropTypes.string,
		description: PropTypes.string,
		fuelConsumption: PropTypes.string,
		engineSize: PropTypes.string,
		accessories: PropTypes.array,
		functionalities: PropTypes.array,
		rentalPrice: PropTypes.string,
		rentalCompany: PropTypes.string,
		address: PropTypes.string,
		rentalConditions: PropTypes.string,
		mileage: PropTypes.number,
	}),
};
export default Item;
