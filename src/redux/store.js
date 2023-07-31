import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./carsSlice";

const carsPersistConfig = {
	key: "cars",
	storage,
};

const carsPersistedReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
	reducer: {
		cars: carsPersistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	// devtools: process.env.NODE_ENV === "development", //devtools on only in dev.mode
});

export const persistor = persistStore(store);
