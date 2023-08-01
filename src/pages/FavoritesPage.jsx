import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card/Card";
import List from "../components/List/List";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";

import { getFavouriteCars } from "../redux/operations";
import {
	selectCars,
	selectFavouriteCars,
	selectIsLoading,
} from "../redux/selectors";

function FavoritesPage() {
	const carsFavourite = useSelector(selectFavouriteCars);

	console.log("carsFavourite", carsFavourite);
	const isLoading = useSelector(selectIsLoading);
	const [car, setCar] = useState({});
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFavouriteCars());
	}, []);

	const handleOpenModal = (car) => {
		setShowModal(true);
		setCar(car);
		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setCar({});
		document.body.style.overflow = "auto";
		document.body.style.height = "auto";
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<div className="container">
				{carsFavourite && (
					<List cars={carsFavourite} openModal={handleOpenModal} />
				)}

				{showModal && (
					<Modal shown={showModal} closeModal={handleCloseModal}>
						<Card car={car} onClose={handleCloseModal} />
					</Modal>
				)}
			</div>
		</>
	);
}

export default FavoritesPage;
