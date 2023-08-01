import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getCarsAPI,
	getFavouriteCarsAPI,
	setCarFavouriteAPI,
} from "../services/mockAPI";

export const getCars = createAsyncThunk(
	"cars/fetchAll",
	async (page, { rejectWithValue }) => {
		try {
			const cars = await getCarsAPI(page);
			return cars;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (_, { getState }) => {
			const { items } = getState().cars;
			if (!items.length) return true;
			return false;
		},
	}
);

export const getFavouriteCars = createAsyncThunk(
	"cars/favourite",
	async (_, { rejectWithValue }) => {
		try {
			const cars = await getFavouriteCarsAPI();
			console.log("operations fave", cars);
			return cars;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		// condition: (_, { getState }) => {
		// 	const { favourite } = getState().cars;
		// 	if (!favourite.length) return true;
		// 	return false;
		// },
	}
);

export const setCarFavourite = createAsyncThunk(
	"cars/setfavourite",
	async ({ id, favourite, page }, { rejectWithValue }) => {
		console.log("operations set fave", id, favourite);
		try {
			console.log("operations set fave", id, favourite);

			await setCarFavouriteAPI(id, favourite);
			const cars = await getCarsAPI(page);
			return cars;
		} catch (error) {
			console.log("setFave oper Error", error);

			return rejectWithValue(error.message);
		}
	},
	{
		// condition: (_, { getState }) => {
		// 	const { favourite } = getState().cars;
		// 	if (!favourite.length) return true;
		// 	return false;
		// },
	}
);
