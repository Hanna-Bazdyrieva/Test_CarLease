import axios from "axios";

axios.defaults.baseURL = "https://64c3d78a67cfdca3b6605b11.mockapi.io/";

export const getCars = async (page = 1) => {
	try {
		const result = await axios.get("cars", {
			params: {
				page,
				limit: 8,
			},
		});
		// console.log(result.data);
		return result.data;
	} catch (error) {
		console.log(error);
	}
};
