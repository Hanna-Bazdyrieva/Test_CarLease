import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card/Card";
import List from "../components/List/List";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";

import { getCars, setCatalogCarFavourite } from "../redux/operations";
import { selectCars, selectIsLoading } from "../redux/selectors";
import LoadMore from "../components/LoadMore/LoadMore";

const CatalogPage = () => {
	const cars = useSelector(selectCars);
	const isLoading = useSelector(selectIsLoading);

	const [page, setPage] = useState(1);
	const [isFaveChange, setisFaveChange] = useState(null);
	const [car, setCar] = useState({});
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCars(page));
	}, [dispatch, page]);

	useEffect(() => {
		if (isFaveChange) {
			dispatch(
				setCatalogCarFavourite({
					car: isFaveChange,
					page,
				})
			);
			setisFaveChange(null);
		}
	}, [dispatch, isFaveChange]);

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
				<LoadMore page={page} onClick={setPage} />
				{cars && (
					<List
						cars={cars}
						openModal={handleOpenModal}
						favouriteChange={setisFaveChange}
					/>
				)}

				<LoadMore page={page} onClick={setPage} />
				{showModal && (
					<Modal shown={showModal} closeModal={handleCloseModal}>
						<Card car={car} onClose={handleCloseModal} />
					</Modal>
				)}
			</div>
		</>
	);
};

export default CatalogPage;
