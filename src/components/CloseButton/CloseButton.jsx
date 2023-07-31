import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

import styles from "./CloseButton.module.css";

function CloseButton({ onClose }) {
	return (
		<div>
			<MdClose onClick={() => onClose()} className={styles.buttonIcon} />
		</div>
	);
}

CloseButton.propTypes = {
	onClose: PropTypes.func,
};

export default CloseButton;
