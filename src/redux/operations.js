import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarsAPI } from "../services/mockAPI";

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
