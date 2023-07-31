import axios from "axios";

axios.defaults.baseURL = "https://64c3d78a67cfdca3b6605b11.mockapi.io/";

export const getCarsAPI = async (page = 1) => {
	return await axios
		.get("cars", {
			params: {
				page,
				limit: 8,
			},
		})
		.then(function (response) {
			console.log("getCars", response.data);

			return response.data;
		})
		.catch(function (err) {
			console.log(err);
		});

	// try {
	// 	const result = await axios

	// 		.then((data) => data);
	// 	console.log("getCars", result.data);
	// 	return result.data;
	// } catch (error) {
	// 	console.log(error);
	// }
};

// export const markFavourite = async (id, favourite) => {
// 	try {
// 		const result = await axios.put(`cars/${id}`, {
// 			favourite,
// 		});
// 		console.log("markFavourite", result.data);
// 		return result.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
