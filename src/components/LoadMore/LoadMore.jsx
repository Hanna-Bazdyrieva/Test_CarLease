import PropTypes from "prop-types";
import { FcLeft, FcRight } from "react-icons/fc";

import styles from "./LoadMore.module.css";

function LoadMore({ page, onClick }) {
	return (
		<div className={styles.loadContainer}>
			{page > 1 && (
				<FcLeft className={styles.icon} onClick={() => onClick(page - 1)} />
			)}
			<p className={styles.text}> {page}</p>

			<FcRight className={styles.icon} onClick={() => onClick(page + 1)} />
		</div>
	);
}

LoadMore.propTypes = {
	page: PropTypes.number,
	onClick: PropTypes.func,
};

export default LoadMore;
