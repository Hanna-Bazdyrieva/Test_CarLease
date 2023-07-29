import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({ text }) {
	return (
		<button className={styles.button} type="button">
			{text}
		</button>
	);
}

Button.propTypes = {
	// label: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
{
	/* {label && (
				<div className={styles.attribute}>
					{label} : {text}
				</div>
			)}
			{!label && <div className={styles.attribute}> {text}</div>} */
}
