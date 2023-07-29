import PropTypes from "prop-types";
import CardConditionsItem from "../CardConditionsItem/CardConditionsItem";

import styles from "./CardAccessories_Conditions.module.css";

function stringToArray(item) {
	const itemArr = item.split(":");
	console.log(itemArr);
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
					{conditionsArray.map((item) => {
						const containsColumn = item.includes(":");
						if (containsColumn) {
							const itemArr = stringToArray(item);
							return (
								<CardConditionsItem
									label={itemArr[0]}
									text={itemArr[1]}
									key={item.id}
								/>
							);
						} else {
							return <CardConditionsItem text={item} key={item.id} />;
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
	conditions: PropTypes.array,
};

export default CardConditions;
