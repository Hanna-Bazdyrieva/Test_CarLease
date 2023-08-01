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
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
		});
};

export const getAllCarsAPI = async () => {
	return await axios
		.get("cars", {})
		.then(function (response) {
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
		});
};

export const getFavouriteCarsAPI = async () => {
	return await axios
		.get("cars", {
			params: {
				favourite: true,
			},
		})
		.then(function (response) {
			console.log("mock fave", response.data);
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
		});
};

export const setCarFavouriteAPI = async (id, favourite) => {
	console.log("mock set fave id", id, favourite);

	return await axios
		.patch("cars", {
			favourite: true,
		})
		.then(function (response) {
			console.log("mock set fave", response.data);
			return response.data;
		})
		.catch(function (err) {
			console.log(err);
		});
	// try {
	// 	const result = await axios.patch(`cars/${id}`, { favourite });
	// 	console.log("markFavourite", result);

	// 	console.log("markFavourite", result.data);
	// 	return result.data;
	// } catch (error) {
	// 	if (error.response) {
	// 		console.log("error response");
	// 		console.log(error.response.data);
	// 		console.log(error.response.status);
	// 		console.log(error.response.headers);
	// 	} else if (error.request) {
	// 		console.log("error request");

	// 		console.log(error.request);
	// 	} else {
	// 		console.log("Error", error.message);
	// 	}
	// 	console.log(error.config);
	// 	console.log(error);
	// }
};
