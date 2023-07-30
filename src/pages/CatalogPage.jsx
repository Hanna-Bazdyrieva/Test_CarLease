import cars from "../assets/cars";
import Container from "../components/Container/Container";

import List from "../components/List/List";

const CatalogPage = () => {
	return (
		<Container>
			<List cars={cars} />
		</Container>
	);
};

export default CatalogPage;
