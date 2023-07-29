import PropTypes from "prop-types";

import styles from "./CardAttribute.module.css";

function CardAttribute({ label, text }) {
	return (
		<>
			{label && (
				<div className={styles.attribute}>
					{label} : {text}
				</div>
			)}
			{!label && <div className={styles.attribute}> {text}</div>}
		</>
	);
}

CardAttribute.propTypes = {
	label: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardAttribute;
