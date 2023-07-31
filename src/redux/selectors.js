// import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsCarsExist = (state) => Boolean(state.cars.items.length);

// export const selectFilter = state => state.filter;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

// };

// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filter) => {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter)
//       );
//     }
//   );
