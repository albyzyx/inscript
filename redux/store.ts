import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import authReducer from "./authSlice";
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    authState: authReducer,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
