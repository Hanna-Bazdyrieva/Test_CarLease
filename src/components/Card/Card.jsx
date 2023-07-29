// import React from "react";
import CardAccessories from "../CardAccessories_Conditions/CardAccessories";
import CardAttribute from "../CardAttribute/CardAttribute";
import CardConditions from "../CardAccessories_Conditions/CardConditions";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import car from "../../assets/car";

function Card() {
	const addressShorten = car.address.split(",").slice(1);
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageThumb}>
				<img
					className={styles.image}
					src={car.img}
					alt={`${car.make} ${car.model} ${car.year} car photo`}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.generalInfo}>
					<div className={styles.title}>
						{car.make} <span className={styles.accent}>{car.model}</span>,{" "}
						{car.year}
					</div>
					<div className={styles.attributes}>
						<div className={styles.attributesUpper}>
							<CardAttribute text={addressShorten[0]} />
							<CardAttribute text={addressShorten[1]} />
							<CardAttribute label="Id" text={car.id} />
							<CardAttribute label="Year" text={car.year} />
							<CardAttribute label="Type" text={car.type} />
						</div>
						<div className={styles.attributesLower}></div>
						<CardAttribute
							label="Fuel Consumption"
							text={car.fuelConsumption}
						/>
						<CardAttribute label="Engine Size" text={car.engineSize} />
					</div>
					<div className={styles.description}>{car.description}</div>
				</div>
				<CardAccessories accessories={car.accessories} />
				<CardConditions conditions={car.rentalConditions} />
				<Button text="Rent a car" />
			</div>
		</div>
	);
}

export default Card;
