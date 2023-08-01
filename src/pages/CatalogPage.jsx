import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonLoadMore from "../components/ButtonLoadMore/ButtonLoadMore";
import Card from "../components/Card/Card";
import List from "../components/List/List";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";

import { getCars, setCarFavourite } from "../redux/operations";
import { selectCars, selectIsLoading } from "../redux/selectors";

const CatalogPage = () => {
	const cars = useSelector(selectCars);
	const isLoading = useSelector(selectIsLoading);

	const [page, setPage] = useState(1);
	const [isFaveChange, setisFaveChange] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCars(page));
		console.log(cars);
	}, [page, cars]);

	useEffect(() => {
		if (isFaveChange) {
			console.log("fav change Page");
			console.log("isFaveChange2", isFaveChange);
			dispatch(
				setCarFavourite({
					id: isFaveChange.id,
					favourite: isFaveChange.favourite,
					page,
				})
			);
			// dispatch(getCars(page));
			// setisFaveChange({});
		}
	}, [cars, dispatch, isFaveChange]);

	// const handleFavouriteChange = (id, favourite) => {
	// 	console.log("page chg", id, favourite);
	// 	dispatch(setCarFavourite(id, favourite, page));
	// };

	const [car, setCar] = useState({});
	const [showModal, setShowModal] = useState(false);

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
				{page > 1 && (
					<ButtonLoadMore onClick={() => setPage(page - 1)}>
						<p>... Show previous</p>

						<p>Page {page}</p>
					</ButtonLoadMore>
				)}
				{cars && (
					<List
						cars={cars}
						openModal={handleOpenModal}
						// favouriteChange={handleFavouriteChange}
						favouriteChange={setisFaveChange}
					/>
				)}

				<ButtonLoadMore onClick={() => setPage(page + 1)}>
					<p>Page {page}</p>
					<p>Load more cars ...</p>
				</ButtonLoadMore>
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
