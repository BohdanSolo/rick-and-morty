import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUser from "./slices/currentUserSlice";
import setCharactersSlice from "./slices/setCharactersSlice"


export const rootReducer = combineReducers({
    currentUser,
    characters: setCharactersSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
