// import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import CloseButton from "../CloseButton/CloseButton";
const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, closeModal, shown }) => {
	// const navigate = useNavigate();

	// const handleCloseModal = useCallback(() => {
	// 	navigate("/catalog");
	// }, [navigate]);

	const closeModalByEscape = useCallback(
		(e) => {
			if (e.code === "Escape") {
				closeModal();
			}
		},
		[closeModal]
	);

	const closeModalOnBackdrop = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};
	// useEffect(
	// 	() =>
	// 		document
	// 			.getElementById("modalContent")
	// 			.classList.add("modal-enter-active"),
	// 	[]
	// );
	useEffect(() => {
		window.addEventListener("keydown", closeModalByEscape);

		return () => {
			window.removeEventListener("keydown", closeModalByEscape);
		};
	}, [closeModalByEscape]);

	return createPortal(
		<>
			<div className={styles.backdrop} onClick={closeModalOnBackdrop}>
				<div
					id="modalContent"
					className={
						shown
							? styles.modalContainer
							: [styles.modalContainer, styles.modalEnterActive].join(" ")
					}
				>
					<CloseButton className={styles.close} onClose={closeModal} />
					{children}
				</div>
			</div>
		</>,
		modalRoot
	);
};

export default Modal;
