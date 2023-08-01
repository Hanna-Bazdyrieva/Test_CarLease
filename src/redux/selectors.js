// import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsCarsExist = (state) => Boolean(state.cars.items.length);
export const selectFavouriteCars = (state) => state.cars.favourite;
export const selectFavouriteCarsExist = (state) =>
	Boolean(state.cars.favourite.length);

// export const selectFilter = state => state.filter;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

// };
// export const selectFavouriteCars = (state) =>
// 	state.cars.items.filter((car) => car.favorite === true);
// export const selectFilteredContacts = createSelector([selectCars], (cars) => {
// 	return cars.filter((car) => car.favorite === true);
// });

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );
//   }
// );
