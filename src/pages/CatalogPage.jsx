import { useEffect, useState } from "react";

import List from "../components/List/List";
import { getCars } from "../services/mockAPI";
import ButtonLoadMore from "../components/ButtonLoadMore/ButtonLoadMore";

const CatalogPage = () => {
	const [page, setPage] = useState(1);
	const [cars, setCars] = useState([]);

	useEffect(() => {
		try {
			getCars(page).then((data) => {
				setCars(data);
			});
		} catch (error) {
			console.log(error);
		}
	}, [page]);

	return (
		<div className="container">
			{page > 1 && (
				<ButtonLoadMore onClick={() => setPage(page - 1)}>
					<p>... Show previous</p>

					<p>Page {page}</p>
				</ButtonLoadMore>
			)}
			<List cars={cars} />

			<ButtonLoadMore onClick={() => setPage(page + 1)}>
				<p>Page {page}</p>
				<p>Load more cars ...</p>
			</ButtonLoadMore>
		</div>
	);
};

export default CatalogPage;
{
}
