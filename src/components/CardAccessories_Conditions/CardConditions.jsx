import PropTypes from "prop-types";
import CardConditionsItem from "../CardConditionsItem/CardConditionsItem";

import styles from "./CardAccessories_Conditions.module.css";

function stringToArray(item) {
	const itemArr = item.split(":");
	return itemArr;
}

function CardConditions({ conditions }) {
	const conditionsArray = conditions.split("\n");

	console.log(conditionsArray);

	return (
		<div className={styles.container}>
			<p className={styles.title}>Rental Conditions: </p>
			{conditionsArray.length > 0 && (
				<div className={styles.accs}>
					{conditionsArray.map((item, index) => {
						const containsColumn = item.includes(":");
						if (containsColumn) {
							const itemArr = stringToArray(item);
							return (
								<CardConditionsItem
									key={index}
									label={itemArr[0]}
									text={itemArr[1]}
								/>
							);
						} else {
							return <CardConditionsItem key={index} text={item} />;
						}
					})}
				</div>
			)}
			{/* {!accessories ||
				(accessories.length === 0 && (
					<div className={styles.accs}>
						<CardAttribute text="None" />
					</div>
				))} */}
		</div>
	);
}

CardConditions.propTypes = {
	conditions: PropTypes.string,
};

export default CardConditions;
