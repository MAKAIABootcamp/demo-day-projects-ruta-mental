import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { formReducer } from "../reducers/formReducer";
import { phoneLinesReducer } from "../reducers/phoneLinesReducer";
import { placesReducer } from "../reducers/placesReducer";
import { userReducers } from "../reducers/userReducers";

const reducer = {
  userStore: userReducers,
  formStore: formReducer,
  phoneLinesStore: phoneLinesReducer,
  placesStore: placesReducer
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
