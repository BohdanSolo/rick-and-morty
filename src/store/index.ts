import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUser from "./slices/currentUserSlice"


export const rootReducer = combineReducers({
    currentUser
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
