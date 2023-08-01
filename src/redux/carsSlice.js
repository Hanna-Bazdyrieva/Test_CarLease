import { createSlice } from "@reduxjs/toolkit";
import { getCars, getFavouriteCars, setCarFavourite } from "./operations";
// import { logoutUser } from 'redux/auth/authOperations';

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
				// console.log("getCars slice payload", payload);
				state.items = payload;
				state.isLoading = false;
			})
			.addCase(getFavouriteCars.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				// console.log("getFavCars slice payload", payload);

				state.favourite = [...payload];
			})
			.addCase(setCarFavourite.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				console.log("setCarFavourite slice payload", payload);

				state.items = payload;
			})
			//     .addCase(removeContact.fulfilled, (state, { payload }) => {
			//       state.isLoading = false;
			//       state.items = state.items.filter(el => el.id !== payload);
			//     })
			//     .addCase(logoutUser.fulfilled, (state)=>{
			//       state.isLoading = false;
			//       state.items = [];
			//     })
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
