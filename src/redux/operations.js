import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarsAPI } from "../services/mockAPI";

export const getCars = createAsyncThunk(
	"cars/fetchAll",
	async (page, { rejectWithValue }) => {
		console.log("operations page", page);
		try {
			const cars = await getCarsAPI(page);
			console.log("operations cars", cars);

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
