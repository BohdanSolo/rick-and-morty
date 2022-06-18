import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUser from "./slices/currentUserSlice";
import allCharactersSlice from "./slices/allCharactersSlice";
import singleCharacterSlice from "./slices/singleCharacterSlice";
import favoriteSlice from "./slices/favoriteSlice"

export const rootReducer = combineReducers({
  currentUser,
  allCharacters: allCharactersSlice,
  singleCharacter: singleCharacterSlice,
  favorite: favoriteSlice
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
