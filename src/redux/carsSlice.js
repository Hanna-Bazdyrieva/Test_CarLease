import { createSlice } from "@reduxjs/toolkit";
import {
	getCars,
	getFavouriteCars,
	setCarFavourite,
	setCatalogCarFavourite,
} from "./operations";

export const carsSlice = createSlice({
	name: "cars",
	initialState: {
		items: [],
		favourite: [],
		isLoading: true,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCars.fulfilled, (state, { payload }) => {
				state.items = payload;
				state.isLoading = false;
			})
			.addCase(getFavouriteCars.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.favourite = [...payload];
			})
			.addCase(setCatalogCarFavourite.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(setCarFavourite.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.favourite = payload;
			})
			.addMatcher(
				(action) => action.type.endsWith("/pending"),
				(state) => {
					state.isLoading = true;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith("/rejected"),
				(state, { payload }) => {
					state.isLoading = false;
					state.error = payload;
					console.log("Error", payload);
				}
			);
	},
});

const carsReducer = carsSlice.reducer;

export default carsReducer;
